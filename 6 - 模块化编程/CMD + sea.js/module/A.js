// 定义没有依赖的模块

define(function (require, exports, module) {
  let name = "wade";
  let sum = function () {
    console.log("--sum--");
  };
  module.exports = {
    name,
    sum,
  };

  /* 或者
    exports.name = name 
    exports.sum = sum 
  */
});
