// 定义有依赖的模块 B模块依赖A模块 和jquery模块
define(["A", "jquery"], function (A, $) {
  let msg = "msg";
  let showMsg = function () {
    A.sum();
  };
  $("body").css("background", "red");
  return {
    msg,
    showMsg,
  };
});
