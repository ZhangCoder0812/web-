/* 

  prototype(原型)： 大部分函数都有一个prototype属性。
  __proto__(原型链)：每个对象都有一个__proto__属性，指向所属类的 prototype。

  prototype也是一个对象 也会有__proto__属性
     - 用来存储可供实例调用的公共方法和属性
     - 这个对象中有一个属性 constructor(构造函数/构造器) 指向当前函数/类本身。
  
  实例.__proto__ = 所属类.prototype     

常见的函数：
    - 普通函数 「实名/匿名函数/自执行函数」
    - 箭头函数 ,没有 prototype
    - 构造函数/类 「内置类/自定义类」 
    - 生成器函数 Generator
    
  let obj = {
    fn: function () {}, // 有 prototype
    sum() {}, // es6简写的函数 没有 prototype
  };

  let fn=()=>{} // 箭头函数 没有 prototype

  (function add() {})(); // 自执行函数 有 prototype


  Object是所有对象类型的类「所有的类是它的实例」是一个基类。
  Object.prototype.__proto__ = null

  obj.x 成员访问：
      先找自己的私有属性，如果没有就在所属类的原型上查找，直到找到Object.prototype 
      为止，这种查找机制称为 '原型链查找制' 

  构造函数/类 原型链上的属性和方法 
      - 对实例来说 是共有的。
      - 对对象本身来说 是私有的。
      - 对于构造函数有用，供实例调用，
        对于普通函数没用，不能创建实例。

  obj.hasOwnProperty('key') 检测是否是私有属性，不查找原型链上的属性 。
      执行机制：obj基于原型链查找机制 找到Object.hasOwnProperty这个方法，
              把这个方法执行，传递参数key，方法中的this是obj。
              内部检测 this 是谁就检测谁是否拥有这个属性。 
              相当于  Object.hasOwnProperty.call(obj,'key')

  let arr = [1,2,3]
  arr.push(4) 相当于 Array.prototype.push.call(arr,4) 或 [].push.call(arr,4)

*/

  function Fn() {
    this.x = 100;
    this.y = 200;
    this.getX = function () {
      console.log(this.x);
    };
  }
  Fn.prototype.getX = function () {
    console.log(this.x);
  };
  Fn.prototype.getY = function () {
    console.log(this.y);
  };
  let f1 = new Fn();
  let f2 = new Fn();
  console.log(f1.getX === f2.getX); // false 不同对象的私有属性
  console.log(f1.getY === f2.getY); // true 查找的都是原型链上的getY
  console.log(f1.__proto__.getY === Fn.prototype.getY); // true
  console.log(f1.__proto__.getX === f2.getX); //  false 前面找的是原型链上的 后面找的是实例私有的
  console.log(f1.getX === Fn.prototype.getX); // false
  console.log(f1.constructor); // Fn
  console.log(Fn.prototype.__proto__.constructor); // Object
  f1.getX(); // 100
  f1.__proto__.getX(); // undefined 原型上没有x属性 基于原型链向上找到Object.prototype上也没有x属性
  f2.getY(); //  200
  Fn.prototype.getY(); // undefined

// -------------------------------- 华丽的分割线 --------------------

  function Animal() {
    this.type = '哺乳类'
  }
  Animal.prototype.type = '哺乳'

  let a = new Animal()
  console.log(Animal.prototype) // { type: '哺乳' }
  console.log(Animal.prototype.constructor == Animal) // true
  console.log(a.__proto__) // 指向当前类的原型
  console.log(Animal.prototype === a.__proto__) // true
  console.log(a.type) // 哺乳类 先在自己身上查找 找不到再在原型上查找

  delete a.type     // 删除自身的type属性
  console.log(a.type) // 哺乳  先在自己身上查找 找不到再在原型向上查找

  Animal.prototype.name = '猫'
  console.log(a.hasOwnProperty('name')) // false hasOwnProperty 检测实例上的属性 
  console.log('name' in a) // true  in即判断实例上属性 又判断原型上属性

  console.log(a.__proto__.__proto__ === Object.prototype) // true
  console.log(Object.prototype.__proto__) // null  最顶层对象 

  /* 
    特殊的 function Object (即是函数又是对象) 即有 prototype 又有__proto__
    他们的 __proto__ 强制指向所属类的原型
  */
  console.log(Function.__proto__ === Function.prototype) // true
  console.log(Object.__proto__ === Function.prototype) // true
  console.log(Object.__proto__ === Object.__proto__) // true