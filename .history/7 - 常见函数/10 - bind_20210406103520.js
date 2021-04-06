/* 

  call/apply 都是立即把函数执行
  bind
    特点：
      + bind可以绑定this指向 绑定参数
      +  bind方法返回一个绑定后的函数（高阶函数）
      + 这个函数若被new 则this就不再是绑定的参数 而是实例
  
   没有把函数立即执行 返回一个新的函数
    只是把后期要改变的this及传递的参数预先存储起来 「柯理化思想」

    
     1. bind可以绑定this指向 绑定参数
  2. bind方法返回一个绑定后的函数（高阶函数）
  3. 这个函数若被new 则this就不再是绑定的参数 而是实例
     new 出来的实例可以找到原有类的原型
  4. 参数可以分两批传    

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
