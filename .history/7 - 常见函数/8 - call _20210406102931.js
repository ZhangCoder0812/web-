/* 
  
  call 
    特点：
        + fn.call(obj,1,2,3,4) 参数一个个传递
        + 可以改变当前函数this指向
        + 让当前函数立即执行
    机制：
        基于__proto__ 找到 Function.prototype 上的call方法，把call方法执行，
        + 传递实参 obj
        + call方法中this -> obj 
        + call执行作用，把fn执行 并且让 fn 中的this变成第一个传递的参数 obj
  
  call性能好于apply，尤其是传递参数个数大于/等于3个
     
*/

// ------------------------------ 华丽的分割线 --------------------------------------

  function fn(x, y, z) {
    console.log(this, x, y, z);
  }

  let obj = {
    name: "wade",
  };

  fn(); // this -> window
  obj.fn();  //报错 obj.fn is not a function, obj.fn 是undefined 不能执行
  fn.call(); // 非严格模式下 不传 或者第一个参数是null/undefined   this->window
  // 严格模式下 不传 this->undefined ,传递的第一个参数是谁 this就是谁
  fn.call(obj, 1, 2, 3); // this->obj


// ------------------------------ 华丽的分割线 --------------------------------------


  function fn1() {
    console.log(this, 11)
  }

  function fn2() {
    console.log(this, 22,)
  }

  // 一个call会让当前函数执行 并将this改变为给的值
  fn1.call(fn2) // fn2 , 11 fn1 执行将this改变为fn2

  // 如果多个call会让call方法执行 并且将call中的this改变成fn2 传入的要是对象则报错 对象不能执行
  fn1.call.call.call(fn2) // window , 22

// ------------------------------ 华丽的分割线 --------------------------------------

  Function.prototype.call = function (ctx) {
    /* 
    1.改变this指向   
      判断call() 括号中是否传参 传了就将this改为改参数 不传就用window
      若传的是字符串则需要用Object转一下 因为直接 this='xxx' 是错误的写法 不能直接改变this指向
      xxx.fn() 函数执行时 .前面是谁 this就是谁 即 {}.fn = fn1
    */
    ctx = ctx ? Object(ctx) : window;
    ctx.fn = this;
    /* 
    2.收集参数 
      因为是一个一个传的所以借助arguments收集所有的参数
      从下标为1开始  因为第一个是改变this的
    */
    let args = [...arguments].slice(1); // slice(1) 截取掉第一个元素 返回新数组 不改变原数组
    let res = ctx.fn(...args);
    delete ctx.fn;
    return res; // 将执行结果返回 某些方法需要返回值 如 slice 等
  };


  function fn1() {
    console.log(this, arguments)
  }

  function fn2() {
    console.log(this, arguments)
  }

  fn1.call(fn2, 7, 8, 9)
