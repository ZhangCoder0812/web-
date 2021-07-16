 
   /*

  --config 指定配置文件 webpack默认配置文件是webpack.config.js 
  根目下新建config文件夹 prod.config.js / dev.config.js / base.config.js
  可以根据不同命令执行不同的打包文件
  "build": "webpack --config config/prod.config.js",
  "start": "webpack serve -c config/dev.config.js",  -c 是 --config的简写

  webpack-merge 合并webpack的配置文件 深合并 每个层级都合并 

  热更新（页面不刷新 对应该模块的视图更新）
  自动更新（页面刷新）
   

*/
