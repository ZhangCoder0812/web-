/* 

 在 optimization 优化项中配置

  - 压缩js 和 css：
      webpack是默认压缩js的，但是css不会默认压缩，一旦使用css压缩，js就不会压缩了，
      所以要配置压缩js，也是一种优化项。
      
      压缩css：npm i  css-minimizer-webpack-plugin 
      压缩js：terser-webpack-plugin 用cnpm转 npm好像装不上
     
  - exclude 排除不用解析的文件    
         
*/