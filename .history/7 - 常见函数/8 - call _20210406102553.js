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

  function fn(x, y, z) {
    console.log(this, x, y, z);
  }

  let obj = {
    name: "wade",
  };

  fn(); // this -> window
  obj.fn();  // 报错 obj.fn is not a function, obj.fn 是undefined 不能执行
  fn.call(); // 非严格模式下 不传 或者第一个参数是null/undefined   this->window
             // 严格模式下 不传 this->undefined ,传递的第一个参数是谁 this就是谁
  fn.call(obj, 1, 2, 3); // this->obj
  fn.call.call.call(obj) // window  如果多个call会让call方法执行 并且将call中的this改变成fn2

/*


    function fn1() {
        console.log(this, 11)
    }

    function fn2() {
        console.log(this, 22,)
    }

    // 一个call会让当前函数执行 并将this改变为给的值
    fn1.call(fn2) // fn2 , 11 fn1 执行将this改变为fn2

    // 如果多个call会让call方法执行 并且将call中的this改变成fn2
    fn1.call.call.call(fn2) // window , 22

    
*/

 
