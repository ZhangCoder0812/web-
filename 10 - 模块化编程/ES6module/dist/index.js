"use strict";

var _A = require("./A");

var _B = require("./B");

/*

  依赖模块需要打包处理 
    babel 将es6转为es5

  安装：
      cnpm install babel-cli browserify -g
      cnpm install babel-preset-env --save-dev  
     「preset 预设 将es6转化为es5的所有插件包」 

  定义 .babellrc 文件  rc -> run control 运行时控制文件
    {
       "presets":["env"] 
    }   
   
  打包命令：babel module -d  dist
          babel 目标文件/文件夹  -d  输出路径 

          由于babel编译后的js文件可能还有requrejs
          所以需要用browserify在打包一遍
          browserify dist/bundle.js -o dist/new-bundle.js  

  导出模块：export
  引入模块：import 

*/

(0, _A.fn1)();
(0, _A.fn2)();
console.log(_A.name);

(0, _B.sum)();
console.log(_B.age);