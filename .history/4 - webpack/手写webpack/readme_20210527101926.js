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
    - 新建name.js/message.js/entry.js
    - 分析依赖关系： entry.js -> message.js -> name.js  
    - 编译自己的打包工具 mywebpack.js
    - 分析ast 如何能够解析除entry.js的依赖。astexplorer.net
      program: {
          body: { // 里面是各种语法的描述
              ImportDeclaration: {  // 引入的声明
                  source: {
                      value: "", // 引用文件的地址
                  },
              },
          },
      },   
    - 生成 entry.js 的ast。
      需要一个工具：babylon 一个机遇babel的js工具
      npm i babylon  
    - 基于生成的ast找到  ImportDeclaration 节点。
      这时需要另一个工具 babel-tra
 
    
*/
