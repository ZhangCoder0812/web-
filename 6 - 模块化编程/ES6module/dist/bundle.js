(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fn1 = fn1;
exports.fn2 = fn2;
// 分别暴露

function fn1() {
  console.log("----sum---");
}

function fn2() {
  console.log("----sum---");
}

var name = exports.name = "wade";
},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 统一暴露

function sum() {
  console.log("----sum---");
}

var age = 12;

exports.sum = sum;
exports.age = age;
},{}],3:[function(require,module,exports){
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
},{"./A":1,"./B":2}]},{},[3]);
