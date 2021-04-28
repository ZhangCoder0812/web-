/* 

 在 optimization 优化项中配置

  - 压缩js 和 css：
      webpack是默认压缩js的，但是css不会默认压缩，一旦使用css压缩，js就不会压缩了，
      所以要配置压缩js，也是一种优化项。
      
      压缩css：npm i  css-minimizer-webpack-plugin 
      压缩js：terser-webpack-plugin 用cnpm转 npm好像装不上
     
  - exclude 排除不用解析的文件 /node_modules/
      对代码运行无影响 优化的是打包速度
  
  - noParse  不解析指定的文件
      module下配置的  
      防止 webpack 解析那些任何与给定正则表达式相匹配的文件。忽略的文件中 不应该含有 import, require, define 的调用
      ，或任何其他导入机制。忽略大型的 library 可以提高构建性能。
         
*/