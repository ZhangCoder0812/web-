/*

  继承：子类继承父类中的属性和方法
       目的是让子类的实例使用父类的属性和方法

  类中的属性和方法是私有的
  原型链上的属性和方法是共有的

  方式一：原型继承（改变原型链指向）
        让父类中的属性和方法在子类的原型链上

        子类.prototype = new 父类
        子类.prototype.constructor = 子类

        - 基于改变原型链完成
        - 子类可以重写父类的方法和属性，导致父类其他实例受影响
        - 父类中私有或公有的属性和方法最后都变成子类中公有的属性和方法
        - 父类中有引用类型属性，其中一个实例改变此属性 导致其他实例都会共享
        - 需要手动添加子类 constructor 构造函数
        
*/

function A(x) {
  this.x = x;
}
A.prototype.getX = function () {
  console.log(this.x);
};

function B(y) {
  this.y = y;
}
B.prototype = new A(200);// 通过指向实例 避免影响其他实例 每个实例唯一性
B.prototype.constructor = B; //保证原型完整性

// B.prototype.__proto__.sum=function(){
//   console.log('sum')
// } B继承A 这样改变链A的原型 会对A的子类有影响
B.prototype.getY = function () {
  console.log(this.y);
};

let b1 = new B(100);
console.log(b1.y);
console.log(b1.x);
b1.getY();
b1.getX();
