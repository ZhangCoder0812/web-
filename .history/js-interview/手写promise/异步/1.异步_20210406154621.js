
// 异步都是基于回调，异步不能通过 try catch 补货异常 回调参数第一个是err

异步串行：回调地域，强行先后 逻辑上不对，都是同步的 没有先后
fs.readFile('name.txt', 'utf8', function (err, data) {
  obj.name = data;
  fs.readFile('age.txt', 'utf8', function (err, data) {
    obj.age = data;
    console.log(obj);
  });
});


//  解决异步核心就是回调
// 使用 闭包/高阶函数 保存times变量 每次减减 等于0时就说明所有异步执行完毕

const fs = require('fs');
let obj = {};

function after(times, callback) { // Promise.all 也是这样做的
  return function () {
    --times == 0 && callback();
  };
}

let fn = after(2, () => {
  console.log(obj);
});

fs.readFile('name.txt', 'utf8', function (err, data) {
  obj.name = data;
  fn();
});

fs.readFile('age.txt', 'utf8', function (err, data) {
  obj.age = data;
  fn();
});
