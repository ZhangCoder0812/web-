// es5创建类方式 new 执行就是构造函数 直接执行是普通函数
function Modal(x, y) {
  // 构造函数体 this.xxx都是给实例添加的私有属性
  this.x = x;
}

// 原型上的方法供其实例调用 m.n/m.getX
Modal.prototype.z = 10;
Modal.prototype.getX = function () {};
Modal.prototype.getY = function () {};

// 把函数当作一个对象 给其设置静态属性和方法 类直接调用 实例不能调用
Modal.n = 200;
Modal.setNumber = function (n) {
  this.n = n;
};

let m = new Modal(10);
for (let key in m) {  // 能拿到所有的私有和共有属性  静态属性和方法都拿不到
  console.log(key);
}
/* 
  x
  z
  getX
  getY
*/

// es6 通过class创建类 不能当作普通函数执行
class Draw {
  // 构造函数体 this.xxx都是给实例添加的私有属性
  constructor(x) {
    this.x = x;
    this.say = function () {};
  }
  y = 10; // 这样也是给实例添加私有属性
  say1 = function () {}; // 私有
  say2() {} // 加在原型上

  /* 
     给原型上添加方法 没有prototype
     通过class在原型上添加的属性 for in 遍历不出来 不可枚举
     内部不能直接给原型上添加属性
  */
  getX() {}
  getY() {}

  // 设置静态属性和方法
  static m = 200;
  static setNumber() {}
}
Draw.prototype.z = 30; // 原型上添加属性 添加共有属性
Draw.prototype.getX1 = function () {}; // 在外面给原型添加属性和方法 for in 可以遍历出来
Draw.n = 100; // 设置静态属性 也可以在外面写
let d = new Draw(10);

for (let key in d) { // 拿不到内部在原型上添加的方法 静态属性和方法都拿不到
  console.log(key);
}
/* 
  y
  say1
  x
  say
  z
  getX1
*/
