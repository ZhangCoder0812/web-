/* 

 babel 主要是为了把JS转义成大部分浏览器能支持的语法

      pollify 是用来打补丁的。babel好像内置了

      babel-loader  
      @babel/core  babel的的核心包 主要转义功能都在这里
      @babel/preset-env  预设

      npm install babel-loader @babel/core @babel/preset-env -D

    使用  

      1. webpack  module 中配置匹配js的文件 use：babel-loader
      2. 根目下下新建 babel.config.js [老版本webpack是 .babelrc ] 表示babel的配置项
         也可以直接写在webpack中 将babel-loader写成对象的形式 但一般不推荐。


    插件 VS 预设： 
      - 插件：某些插件有的人用有的人不用 可以单独装 不用预先存在。 
              如：编译 async/await 的插件有的人项目中可能就没用过
                  async/await所以不用预先存在预设里，当用到时候在装
                    
      - 预设：插件的一个集合 把可能用的到的/必须的插件 预先存起来。
              如：编辑 let/const/箭头函数的插件 这些项目种大概率肯定
                  会用的到，就预先存起来
         
*/