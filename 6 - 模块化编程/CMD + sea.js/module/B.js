// 定义有依赖的模块

define(function (require, exports, module) {
  // 同步引入
  let A = require("./A");
  console.log(A);

  // 异步引入
  //   require.async("./A", function (A) {
  //     console.log(A);
  //   });
  let fn = function () {
    console.log("----fn-----");
  };
  module.exports = {
    fn,
  };
});
