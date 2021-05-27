/* 

 webpack 本质上，webpack 是一个用于现代 JavaScript 应用程序的 静态模块打包工具。
         当 webpack 处理应用程序时，它会在内部构建一个 依赖图(dependency graph)，
         此依赖图对应映射到项目所需的每个模块，并生成一个或多个 bundle。

 过程：
    - 找到一个文件
    - 解析这个文件，提取它的依赖
    - 解析入口文件的依赖，递归的去创建一个文件间的依赖图，描述所有文件的依赖关系
    - 把所有的文件打包成一个文件  
    
  开始开发：
    1. 新建name.js/message.js/entry.js
    2. 分析依赖关系： entry.js -> message.js -> name.js  
    3. 编译自己的打包工具 mywebpack.js
    4. 分析ast 如何能够解析除entry.js的依赖。astexplorer.net
        program: {
            body: { // 里面是各种语法的描述
                ImportDeclaration: {  // 引入的声明
                    source: {
                        value: "", // 引用文件的地址
                    },
                },
            },
        },   
    5. 生成 entry.js 的ast。
       需要一个工具：babylon 一个机遇babel的js工具
       npm i babylon  
    6. 基于生成的ast找到  ImportDeclaration 节点。
       这时需要另一个工具 babel-traverse 可以像遍历对象那样遍历ast语法树
    7. 获取entery.js的依赖  
    8. 优化createAsset函数 使其能够区分文件。
       因为要获取所有文件的依赖，所以需要一个id来标识所有文件。
       这里用一个简单的自增number 这样每次遍历的文件id就唯一了。
       先获取到entry.js的 id filename dependencies
    9. 获取到单个文件的依赖后接下来建立依赖图
       新增一个 createGraph 函数，把createAsset调用移入createGraph。
       entery的路径需要是动态的 所有createGraph需要接受一个参数entery
    10.上面存储的都是相对路径，要把它们转为绝对路径，才能在任何地方都能 拿到文件的asset    
    11.需要一个map，记录depend中的相对路径和childAsset的对应关系
       因为后面要做依赖的引入 需要这样的一个对应关系
    12.接下来遍历所有的依赖文件   
    13.新增一个bundle方法 转义文件中的语法
    14.创建整体的结果代码。
       因为他需要接受参数 且需要立即执行 所以用一个自执行函数来包裹
       这个自执行函数的接受参数是：module 每一个文件模块
    15.编译所有的源代码。npm install  babel-core babel-preset-env
    16.把编译后的代码 加入到result中 。
       CommJS规范： 
          module变量代表当前模块，这个模块是一个对象，它的
 
    
*/
