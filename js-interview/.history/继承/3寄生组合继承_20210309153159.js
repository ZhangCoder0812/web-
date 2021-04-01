function A(x) {
  this.x = x;
}
A.prototype.getX = function () {
  console.log(this.x);
};

function B(y) {
  A.call(this, 200); // 通过call实现继承
  this.y = y;
}

// Object.create(obj) 创建一个空对像 让空对象__proto__指向 obj
B.prototype = Object.create(A.prototype);
B.prototype.constructor = B;

B.prototype.getY = function () {
  console.log(this.y);
};

let b1 = new B(100);
console.log(b1.y);
console.log(b1.x);
b1.getY();
b1.getX();

/*
 
 组合继承：call继承 + 类似于原型继承
    - 父类私有和公有的属性分别是子类的私有和公有的属性

    
 */


Object.create = function (obj) {
  function Fn() { }
  Fn.prototype = obj;
  return new Fn();
  // let o = {};
  // o.__proto__ = obj;
};
