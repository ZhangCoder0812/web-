/* 

 类的 '封装' '继承' '多态'：
   - 封装：把实现不同功能的代码抽离成不同方法或文件，后期使用直接调用。
          实现 '高内聚' '低耦合'
   - 继承：子类继承父类的方法和属性 ,子类的实例可以拥有子类和父类共有的方法和属性。      
   - 多态：重载「方法名相同，参数类型/个数不同」
              js中没有严格意义的重载，方法名相同会被覆盖，通过arguments可以模拟载
          重写「子类重写父类的方法」       

*/

/* 
    1. 原型继承 「后台：子类继承父类，会把父类的方法copy一份给子类」
        特点：和传统的后台语言继承不一样，并没有把父类的方法copy一份给子类，而是建立
             子类原型和父类原型之间的原型链指向，后期子类实例访问父类中提供的方法和属性，
             也是基于__proto__原型链一层层查找的。 
        + 父类赋予其实例的私有属性 会变成子类实例的共有属性
        + 子类实例可以基于原型链修改父类原型上的方法和属性，会对父类的其他实例产生影响   
*/

function Parent() {
  this.x = 100;
}

Parent.prototype.getX = function () {};

function Child() {
  this.y = 200;
}

Child.prototype = new Parent();

Child.prototype.getY = function () {};

let ch = new Child();
console.log(ch);

let o = new Object(1);
o.__proto__.__proto__.sum = function () {};
let o1 = new Object(1);
console.log(o);
console.log(o1);

/* 
  2. call 继承
     把父类当作普通方法执行，让方法中的this是子类的实例。
     + 子类可以继承父类的私有方法和属性，继承不了父类原型链上的方法和属性
*/

function Parent() {
  this.x = 100;
}

Parent.prototype.getX = function () {};

function Child() {
  Parent.call(this);
  this.y = 200;
}

Child.prototype.getY = function () {};

let ch1 = new Child();
console.log(ch1);

/* 
  3. 寄生组合继承 「原型继承+call继承」
 
*/

function Parent() {
  this.x = 100;
}

Parent.prototype.getX = function () {};

function Child() {
  Parent.call(this);
  this.y = 200;
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.getY = function () {};

let ch2 = new Child();
console.log(ch2);

/* 
  es6 继承
*/
class Parent {
  constructor() {
    this.x = 100;
  }
  getX() {}
}

class Child extends Parent {
  constructor() {
    // 一旦用链extends继承 且出现constructor 就必须写super()
    // super() 原理类似等价于 Parent.call(this)
    super();
    this.y = 200;
  }
  getY() {}
}
