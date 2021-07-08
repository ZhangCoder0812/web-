// 自执行函数写名字实现递归
(function fn() {
  console.log(1);
  fn(); // 在自己上下文中可以使用 相当于在函数的私有上下文的AO中声明一个fn变量 值为函数
})()(
  // console.log(fn) 报错 匿名函数具名化 不允许在外面使用

  // 使用 arguments.callee 实现递归  严格模式下不支持
  function () {
    console.log(1, this, arguments.callee, arguments.callee.caller);
    // arguments.callee 当前执行函数
    // arguments.callee.caller 当前函数上下文
    arguments.callee();
    // 问题：第一次this是 window再次执行this是arguments
  }
)();

var b = 10;
(function b() {
  b = 20;
  console.log(b); // [Function: b] 直接修改匿名函数具名化的名字是不生效的
})();
console.log(b); // 10

var b = 10;
(function b() {
  var b = 20;
  console.log(b); // 20 这里只要声明了变量就是函数内部的了 无论var/let/const 结果都为20
})();
console.log(b); // 10
