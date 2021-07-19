/* 
.npmrc 文件 配置npm的源 淘宝源等
"build":"rm -rf dist && npx webpack"

1. webpack中的module是指什么？
    - webpack支持的模块系统：
        + ESMoudle(ESM)：
            export + import
            package.json 中 type:module 强制让package.json中的文件使用ESM规范
        + CommonJS：module.exports + require
        + AMD：
        + Assets(资源统称，图片 音视频 font等)


2. webpack中如何表示依赖关系？
    - ESM： import 
    - CommonJS： require
    - AMD： define require
    - css/less/sass：@import      
    

3. chunk 和 bundle 区别是什么？
    - chunk：webpack打包过程中Moudles的集合，是打包过程中的概念。
             从一个入口模块开始，入口模块可能引用其他模块，其他模块也引用其他模块...
             webpack通过这些引用关系逐个打包模块，这些moudle就形成了一个chunk。
             如果有多个入口模块，可能会产生多个打包路径，每条路径都会形成一个chunk。
    - bundle：最终输出的一个或多个打包好的文件。

    一句话总结：chunk是过程 bundle是结果。
               chunk是打包过程中的代码块，bundle是打包结果输出的代码块，chunk在构建完成呈现为bundle。
 
    关系/区别：多数情况下，一个chunk产生一个bundle。
              devtool:'source-map' 这时一个entery 一个chunk会产生两个bundle，多了个源码映射的文件。
    
    entey:{
        index:['a.js',b.js] 这种写法形式的多入口 只会产生一个chunk/bundle 因为就一个key index 
                            无论数组里面有多少个都会算作一个chunk
    }     
    entry:{  这种写法会产生两个chunk/bundle 因为两个key
        index:'a.js',
        home:'b.js',
    }

    下面这段配置会产生几个chunk ？
     {
        entry: {
            index: "a.js",
            home: "b.js",
        },
        output: {
            filename: "[name].js",
        },
        optimization: {
            runtimeChunk: "single",
            splitChunks: {
                cacheGroup: {
                    commons: {
                        chunks: "initial",
                        minChunks: 2,
                        minSize: 0, 不限制chunk的大小
                    },
                    vendor: { 打包第三方包
                        test: /node_moudles/, 匹配的是node_moudles下的所有包
                        chunks: "initial",
                        name: "vendor",
                        enforce: true,
                    },
                },
            },
        },
     }

    答：5个
     - entry -> index
     - entry -> home
     - runtimeChunk: "single" -> 解析模块依赖所需要的语法单独打包到一个chunk
     - splitChunks 里的 common
     - splitChunks 里的 vendor

 
4. plugin 和 loader 分别是做什么的？怎么工作的？
    - plugin：扩展插件
        运行在webpack运行的各个阶段，都会广播出对应的事件 插件去监听对应的事件 
        不需要webpack开发团队自己去维护 将各个阶段抛给用户 让多用户去壮大webpack的功能
        这也是webpack插件机制🔥的原因。
    - loader：模块转换器 
        将一些webpack不能识别的模块转化为webpack能识别的模块。
        本质：webpack loader将所有类型的文件 转换为应用程序的依赖图，可以直接引用的模块。
    - compiler：
        包含了webapck环境的所有配置信息，包含了options loader plugins...等等    
        webpack启动的时候实例化 它在全局是唯一的 可以理解为webpack的实例
    - compliation：
        包含了当前的模块资源 编译生成资源
        webpack 在开发模式下运行的时候，每当检测到一个文件变化 就会创建一次新的 compliation  

5. webpack的打包过程？
        - 初始化参数：webpack.config.js 或 命令行中 配置的参数
        - 开始编译：初始化一个 compiler对象 加载所有的配置 开始执行编译
        - 确定入口：根据entry中的配置 找到所有的入口文件 
        - 编译模块：从入口文件开始 调用所有loader 再去递归的查找各个文件的依赖
        - 完成模块编译：得到每个模块被翻译后的最终内容以及他们之间的依赖关系 
            「依赖图：描述webpack各个模块之间的依赖关系」
        - 输出资源：根据得到的依赖关系 组装成一个个包含多个module的chunk
        - 输出完成：根据配置，确定要输出的文件名以及文件路径

*/

