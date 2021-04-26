/* 
 
  yarn 比npm快 比cnpm慢 
  同一个项目不要混着用，yarn/cnpm 会互删部分包 (npm/cnpm 不会互删 可以混着用)

  使用webpack要安装两个工具：npm install webpack webpack-cli -D

  开发环境/依赖：-D 开发环境下用的依赖 package文件中的 devDependencies
              如：webpack css的一些loader(只负责编译 上线的文件中是编译成css后的)

  生产环境/依赖：-S 生产环境下用的依赖 一般小于开发依赖 上线的时候用到就装到生产环境下
              package文件中的 dependencies
              如：jQuery echarts

  由于webpack是按依赖打包的，用得到就打包，用不到就不会打包，所以一般装在哪个环境都一样 
  并不会影响打包后的体积，只有vue分了一下dependencies/devDependencies，而react根本
  就没有分，所以装在哪个环境都一样。什么都不假默认装在dependencies下            


*/

/* 


 webpack 基于node编写 开箱即用 可以什么都不写 

 资源文件写在src文件夹里面 webpack默认入口为：src/index.js

 package文件中的 scripts 标签中配置打包命令："build":"webpack"
 
 执行：npm run build 
 生成打包后的dis文件夹

*/

/* 

 根目录下新建 webpack.config.js (名字webpack默认规定) 用于手动配置其他选项。  

 开发服务器  npm install webpack-dev-server
  配置package.json中
    4.x -> "dev":"webpack-dev-server"
    5.x -> "dev":"webpack serve" / "webpack serve --mode development --progress"
  使用：npm run dev
  不用每次都build打包手动预览 修改代码之后自动编译
  
  若是打包后的文件名字不是index.html 项目启动后页面上你看到的是一堆
  文件夹，因为默认找的是index.html。打包后的文件名设置成index.html
  就可以直接预览了。项目启动后访问打包后额html不用加dist文件夹
  http://localhost:8080/xxx.html  
   

  --config 指定配置文件 webpack默认配置文件是webpack.config.js 
  根目下新建config文件夹 prod.config.js / dev.config.js / base.config.js
  可以根据不同命令执行不同的打包文件
  "build": "webpack --config config/prod.config.js",
  "start": "webpack serve -c config/dev.config.js",  -c 是 --config的简写

  webpack-merge 合并webpack的配置文件

*/
