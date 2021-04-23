function Fn() {
  let a = 1;
  this.a = a;
}

Fn.prototype.say = function () {
  this.a = 2;
};

Fn.prototype = new Fn();
/* 
  Fn.prototype = xxx
  原型重定向： 
    可以给构造函数原型批量添加属性和方法 便于管理
    弊端：缺少constructor，原型上自带的方法和属性会丢失
    解决：- 手动添加constructor,
         - 合并新旧原型对象 Object.assign({},x,y) 将x,y合并到一个
            空对象上返回,不影响之前的x,y。
          注意：constructor不可枚举，合并原型也必须手动添加constructor。
*/
let f1 = new Fn();

Fn.prototype.b = function () {
  this.a = 3;
};

console.log(f1.a); // 1
console.log(f1.prototype); // undefined 对象一般没有prototype
console.log(f1.b); // func
console.log(f1.hasOwnProperty("b")); // false  判断私有
console.log("b" in f1); // true  判断私有或共有
console.log(f1.constructor == Fn); // true
