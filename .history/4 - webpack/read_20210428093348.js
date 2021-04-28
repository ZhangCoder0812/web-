/* 

 babel 主要是为了把JS转义成大部分浏览器能支持的语法

      babel-loader  
      @babel/core  babel的的核心包 主要转义功能都在这里
      @babel/preset-env  预设

      npm install babel-loader @babel/core @babel/preset-env -D

    使用  

      1. webpack  module 中配置匹配js的文件 use：babel-loader
      2. 根目下下新建 babel.config.js [之前是 .babele]
*/