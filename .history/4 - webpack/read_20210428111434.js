/* 

 在 optimization 优化项中配置

  - 压缩js 和 css：
      webpack是默认压缩js的，但是css不会默认压缩，一旦使用css压缩，js就不会压缩了，
      所以要配置压缩js，也是一种优化项。
      
      压缩css：npm i  css-minimizer-webpack-plugin 
      压缩js：terser-webpack-plugin 用cnpm转 npm好像装不上
     
  - exclude 排除不用解析的文件 /node_modules/
      对代码运行无影响 优化的是打包速度
  
  - noParse  不解析指定的文件 module下配置的  
      例如装axios的时候 可能axios还依赖其他的包，那我们配置 noParse:/axios/
      的时候当我们使用axios就不会去解析axios依赖的包，但是可能会报错。
      一般长用的是 noParse:/jquery|lodash/ 因为这两个包没有其他依赖。
      使用这个优化项需要我们程序员知道这个包有没有其他依赖    
*/