/*

  原型：prototype
  原型链：__proto__

  每个函数都有一个prototype属性
  每个对象都有一个__proto__属性
  prototype也是一个对象 也会有__proto__属性

*/

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

