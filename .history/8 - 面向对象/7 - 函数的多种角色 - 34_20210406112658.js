/* 

 函数的多种角色：

    - 函数
       + 普通函数「私有上下文，AO，作用域/作用域链，形参赋值，变量提升，闭包...」
       + 构造函数/类「new执行 拥有普通函数执行的特点，多了 类 实例 prototype __proto__ ... 」
    - 对象「静态属性和方法」

    @1 Object是所有对象的基类，每一个对象都是它的实例，所以每一个对象都会基于__proto__
       找到Object.prototype
         对象分类：
           + 普通对象
           + 特俗对象：数组 正则 Error 日期...
           + 实例对象
           + 原型对象
           + 函数对象
           ...
       每一个函数也是对象类型的，也是Object的一个实例
      
    @2  每一个函数都是Function类的实例，所以函数的__proto__指向Function.prototype
         函数分类：
           + 普通函数
           + 箭头函数
           + 生成器函数
           + 构造函数
           ...

    Object本身就是内置类 也就是一个函数，所以Object是Function类的实例，
    Funtion也是一个内置类 它是自己本身的一个实例 但它也是一个对象 所以Function也是Object类的一个实例

   所以：Funtion.__proto__ = Function.prototype
        Object.__proto__ = Function.prototype
        Funtion.__proto__ = Object.__proto__ 

   注意：Function.prototype
      其他数据类型的prototype都是对象数据类型的，但是Function.prototype是一个
      匿名空函数，可以是执行不会报错 Function.prototype()。操作起来和其他数据类型
      的prototype没有区别。
      Object.prototype() 报错 是一个对象 不能执行    

*/

  function Modal(x, y) {
    this.x = x;
  }
  Modal.prototype.getX = function () {};
  Modal.prototype.getY = function () {};
  Modal.n = 200;
  Modal.setNumber = function (n) {
    this.n = n;
  };
  let m = new Modal();

  console.log(m instanceof Modal); // true
  console.log(m instanceof Object); // true
  console.log(m instanceof Function); // false 基于原型链找不到Function的原型 找的是Object的原型
  console.log(Modal instanceof Object); // true
  console.log(Modal instanceof Function); // true
  // true Function作为函数也是Function类的实例 Function.__proto__ = Function.prototype
  console.log(Function instanceof Function);
  // true 函数也是对象 Function.__proto__.__proto__ = Object.prototype
  console.log(Function instanceof Object);
  // true 对象也是函数 Object.__proto__== Function.prototype
  console.log(Object instanceof Function);
  // true  Object.__proto__.__proto__== Object.prototype
  console.log(Object instanceof Object);

  console.log(Object.__proto__ == Object.prototype); //false

  console.log(Function.__proto__ == Function.prototype); //true

 