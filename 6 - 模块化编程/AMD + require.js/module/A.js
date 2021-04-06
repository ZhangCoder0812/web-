// 定义没有依赖的模块 模块名就是文件名
define(function () {
  let name = "wade";
  let sum = function () {
    console.log("---sum---");
  };
  return {
    name,
    sum,
  };
});
