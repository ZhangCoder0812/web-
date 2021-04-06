/* 
  
  call 机制：fn.call(obj,1,2,3,4) 参数一个个传递
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
  // obj.fn();  报错 obj.fn is not a function, obj.fn 是undefined 不能执行
  fn.call();
  /*  
    非严格模式下 不传 或者第一个参数是null/undefined   this->window
    严格模式下 不传 this->undefined ,传递的第一个参数是谁 this就是谁
  */

  fn.call(obj, 1, 2, 3); // this->obj
