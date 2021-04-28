/* 

optimization下配置的

  - 压缩js 和 css：
      webpack是默认压缩js的，但是css不会默认压缩，一旦使用css压缩，js就不会压缩了，
      所以要配置压缩js，也是一种优化项。
      
      压缩css：npm i  css-minimizer-webpack-plugin 
      压缩js：terser-webpack-plugin 用cnpm转 npm好像装不上

Rule 下配置的      
      
  - exclude 排除不用解析的文件 /node_modules/
      对代码运行无影响 优化的是打包速度

module下配置的  

  - noParse  不解析指定的文件  
      我们使用第三方插件时 webpack回去帮我们去查找 并且还会把这个包依赖的其他包
      都拿过来。
      例如使用axios的时候 可能axios还依赖其他的包，那我们配置 noParse:/axios/
      的时候当我们使用axios就不会去解析axios依赖的包，但是可能会报错。
      一般长用的是 noParse:/jquery|lodash/ 因为这两个包没有其他依赖，告诉webpack不用
      去查找他们的依赖包了，提升解析性能。
      使用这个优化项需要我们程序员知道这个包有没有其他依赖   .

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
      就可以直接在代码中使用 $ 就像全部变量一样
  
  - IgnorePlugin , webpack自带的插件 不用安装
      忽略包中的不必要文件，如moment中的国际化文件 一般用不了那么多
      那么就可以配置不打包国际化的文件，使用哪种语言就单独引入。
     
      IgnorePlugin 忽略的是自己包中的文件 属于自己东西
      noParse 忽略的是包依赖的第三方包 不属于自己的东西
      
      

*/
