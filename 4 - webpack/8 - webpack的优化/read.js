/*

optimization下配置的

  - 压缩js 和 css：
    webpack是默认压缩js的，但是css不会默认压缩，一旦使用css压缩，js就不会压缩了，
    所以要配置压缩js，也是一种优化项。

    压缩css：npm i  css-minimizer-webpack-plugin
    压缩js：terser-webpack-plugin 用cnpm转 npm好像装不上

  - splitChunks 分包
    在打包 jquery / momnent 的包体积较大，可以通过 splitChunks 分包。 将第三方单
    独打包成一个文件减少index.js的体积。实际引用价值不是很大，一些懒加载的操作默认就已
    经实现分包来。

Rule 下配置的

  - exclude 排除不用解析的文件 /node_modules/
      对代码运行无影响 优化的是打包速度

module下配置的

  - noParse  不解析指定的文件
      我们使用第三方插件时 webpack会去帮我们去查找 并且还会把这个包依赖的其他包
      都拿过来。
      例如使用axios的时候 可能axios还依赖其他的包，那我们配置 noParse:/axios/
      的时候当我们使用axios就不会去解析axios依赖的包，但是可能会报错。
      一般长用的是 noParse:/jquery|lodash/ 因为这两个包没有其他依赖，告诉webpack不用
      去查找他们的依赖包了，提升解析性能。
      使用这个优化项需要我们程序员知道这个包有没有其他依赖.

resolve下配置

  - alias
      配置查找路径 提升文件查找性能  优化编译速度
      绝对路径 快于 相对路径 查找速度 。
      绝对路径告诉webpack准确的路径 不用再向相对路径那样每次询问了

  - extensions
      配置省略文件后缀名

  - modules
      配置引入自己的文件可以像引入第三方文件那样不用写路径
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      减少文件搜索范围


Plugin下配置

  - ProvidePlugin
      可以不用导入第三方包直接使用 即不写import， webpack自带的插件 不用安装
      如：使用jquery必须要 import $ from 'jquery'.
      配置
        new webpack.ProvidePlugin({
            $: "jquery",
        }),
      就可以直接在代码中使用 $ 就像全局变量一样

  - IgnorePlugin , webpack自带的插件 不用安装
      忽略包中的不必要文件，如moment中的国际化文件 一般用不了那么多
      那么就可以配置不打包国际化的文件，使用哪种语言就单独引入。
      可以减少打包的体积

      IgnorePlugin 忽略的是自己包中的文件 属于自己东西
      noParse 忽略的是包依赖的第三方包 不属于自己的东西

      webpack打包是按依赖打包说的是整个包，只要引入了 虽然只用了一个方法
      那么这个包就会整体打包进去。


*/

/*


 - webpack-bundle-analyzer 分析打包后的文件。
   直接在在webpack配置文件中引入 插件中new一下使用即可
   npm run dev/build 之后 默认启动 http://127.0.0.1:8888
   开发环境下看到的东西相对多一点 因为启服务的时候会用到这些包 不用去管它
   并不是我们手动安装的，上线的时候并不会。


 - 在我们使用一些包的时候可能体积过大，如：vue。那么我们可以使用cdn的方式 不用npm下载。
   用的时候直接使用Vue全局变量就可以了，但是这种方式不太好，全局变量容易被修改
   我们还是希望通过 import Vue from 'vue' 的方式来使用，这种方式是去 node_modules 下
   找的包，我们通过cdn方式引入的Vue并不在node_modules中。
   可以通过配置 externals 外部扩展,可以让我们通过cdn的方式引入一些包 在模块中通过import方式使用。
   在打包时也不会打包进去。
   externals: {
     vue: "Vue", // import Vue from 'vue'
     // aaa:"xxx"  xxx是cdn引入的全局变量 aaa是我们在模块中import xxx from 'qqq'
   },
   那么我们就可以import Vue from 'vue' 的方式来使用。echarts也适合这样做，适用于一些较大的包。

 - DllPlugin/DllReferencePlugin 动态链接库 webapck内置插件
   单独打包第三方包 当 run dev/build 的时候不用考虑这些包 提交打包好来 提升构建速度。
   跟目录下新建 webpack.mydll.js 名字随意取。使用DllPlugin插件 单独打包一些包。
   在配置个单独打包的脚本  "dll":"webpack -c webapck.mydll.js"
   执行 npm run dll 生成 dll_mydll.js 和 manifest.json

   DllReferencePlugin 在主配置文件(webpack.config,js)中使用。
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, "./dist/manifest.json"),
    }),
    这样在主配置文件打包时候会看看manifest.json文件中有的一些包已经打包好来 就不用再次打包了。
    最后在模版html文件中引入 dll_mydll.js 这个文件。
    (注意配置CleanWebpackPlugin 防止每次打包时清空dist文件夹)


    三种分包方式 ： externals / splitChunks / DllPlugin / DllReferencePlugin
      externals 最推荐使用

 - 多进程打包  thread-loader 新 / happypack 老
    npm  install  thread-loader 主要在js中使用 css也可以
    用在文件较多时使用 文件较少反而适得其反  开进程也需要时间
     module:{
       rules:{
         test:/\.js$/,
         use:['thread-loader']
       }
     }


*/
