/*、

  es6中基于class创建的类不能当作普通函数继承
  原理类似于组合继承
  子类继承父类 可以不写constructor 一旦写类必须写 super
  不写constructor  默认浏览器加上
  constructor(...args){
      super(...args)
  }

*/

class A {
  constructor(x) {
    this.x = x;
  }
  getX() {
    console.log(this.x);
  }
}

class B {
  constructor(y) {
    this.y = y;
  }
  getY() {
    console.log(this.y);
  }
}

B.prototype = Object.create(A.prototype); // 报错 es6 中不允许重定向原型指向


let b1 = new B(200);
console.log(b1)



class B extends A {
  // => B.prototype.__proto__ = A.prototype
      // 一旦用了extends继承 且出现constructor 就必须写super()
    // super() 原理类似等价于 Parent.call(this)
  constructor(y) {
    super(200); //super() 原理类似等价于 A.call(this,200)
    this.y = y;
  }
  getY() {
    console.log(this.y);
  }
}

let b1 = new B(200);
console.log(b1);
