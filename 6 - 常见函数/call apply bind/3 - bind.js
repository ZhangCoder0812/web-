/* 
  bind
    特点：
      + bind可以绑定this指向 绑定参数
      + call/apply 都是立即把函数执行 
        bind方法返回一个绑定后的函数（高阶函数） 没有把函数立即执行 返回一个新的函数
        只是把后期要改变的this及传递的参数预先存储起来 「柯理化思想」
      + 这个函数若被new 则this就不再是绑定的参数 而是实例
        new 出来的实例可以找到原有类的原型
      + 参数可以分两批传  
     
*/

function fn(x, y) {
  console.log(x, y);
}

let obj = {
  name: "wade",
};

document.onclick = fn; // this->document x->事件对象 y->undefined
document.onclick = fn.call(obj, 10, 20); // call 会立即执行 我们想的是点击才执行
// 这样写不会立即执行
document.onclick = function (e) {
  fn.call(obj, 10, 20);
};

// 直接使用 bind 不会立即执行
document.onclick = fn.bind(obj, 10, 20);


// ------------------------------ 手撕 bind --------------------------------------

Function.prototype.bind = function (ctx) {
  let _this = this;
  let bindArgs = [...arguments].slice(1);
  function fBound() {
    let args = [...arguments].slice();
    _this.apply(this instanceof fBound ? this : ctx, [
      ...bindArgs,
      ...args,
    ]);
  }
  function Fn() { } // Object.create 原理
  Fn.prototype = _this.prototype;
  fBound.prototype = new Fn(); // 直接这样 fBound.prototype= _this.prototype会导致原型链共用
  return fBound;
};

// ------------------------------  --------------------------------------

let obj = {
  name: "wder",
};

function fn(a, b, c) {
  this.age = 12;
  console.log(this, a, b, c);
}
fn.prototype.hobby = "打篮球";
/*
  1. bind可以绑定this指向 绑定参数
  2. bind方法返回一个绑定后的函数（高阶函数）
  3. 这个函数若被new 则this就不再是绑定的参数 而是实例
     new 出来的实例可以找到原有类的原型
  4. 参数可以分两批传    
*/
let newFn = fn.bind(obj, 2, [344, 5]);
newFn(9)
// 如果绑定的函数被new了 那么当前函数的this就是当前的实例了
let instance = new newFn(9);
console.log(instance.age);
console.log(instance.hobby);