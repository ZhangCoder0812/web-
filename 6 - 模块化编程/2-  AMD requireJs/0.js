/*

  AMD require.js 
     Asynchronous Module Definition，即异步模块加载机制
   
    既可以模块化开发，也可以有效解决模块之间依赖问题
    
    define("A", ["B", "C"], function (B, C) {
        B.test1()
        C.test2()
        let sum = function () { }
        return {
          sum
        }
    });

    使用 define 定义模块 ，
    第一个参数：定义的模块名 A 
    第二个参数：所依赖的其他模块 是一个数组 [B,C]
    第三个参数：该模块的实现 是一个函数 参数是以来的其他模块

*/


//全局配置
require.config({
  baseUrl: 'js/lib',
});

require(['moduleB', 'moduleA'], function (moduleB, moduleA) {
  console.log(moduleB);
});