/* 


面向对象(oop)：是一种构建事物的思想

  - 每个实例都有类赋予他们的共有属性和方法「共有化」
  - 每个实例都有自己私有的属性和方法「私有化」


  内置类，自定义类都是函数数据类型的值
  
  typeof Number  => function 
  typeof String  => function 

  class A{}
  typeof A  => function 


  构造函数执行(new执行) 和 普通函数执行 区别：
    构造函数执行会创建实一个新对象，普通函数执行不会 
    this 不同: 
           构造函数this指向实例，相当于给实例添加私有属性
           普通函数执行前面谁点this就是谁，没有的话是window
    return 结果不同：
           构造函数return的是普通数据类型或不写return 返回的是实例对象，return的是对象则返回该对象
           普通函数return是啥就是啥 不写return是undefined
     
*/

function Fn(name) {
  let sum = 10; // sum是函数中的私有变量 只有this.xxx 才是给实例增加属性
  this.name = name;
  this.say = function () {};
}

let res1 = Fn("wade"); // 普通函数执行
let res2 = new Fn("wade"); // 构造函数执行 有参数列表new 优先级20
let res3 = new Fn(); // 构造函数执行 无参数列表new 优先级19 只不过没有传递实参值
