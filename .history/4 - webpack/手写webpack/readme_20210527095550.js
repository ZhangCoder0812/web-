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
    - 
 
    
*/
