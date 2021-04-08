/*

 数据类型检测：

   - typeof
       返回结果是个字符串 typeof typeof typeof [10,20] => 'string'
       检测基本数据类型可以，特俗：typeof null = 'object'
       检测引用数据类型 除了 typeof function = 'function' 其余都是 'object'

   - instanceof
       监测当前实例是否属于这个类，并不是数据类型检测，可以依托特点 检测出类型。
       并不可靠 因为原型 prototype 容易被修改。
       局限性：不能检测基本数据类型
       
       console.log(1 instanceof Number) // false 不会装箱处理 原始值类型没有原型链 所以为false 
       console.log(new Number(1) instanceof Number) // true  

       let arr = [1, 2]
       console.log(arr instanceof Array) // true
       console.log(arr instanceof Object) // true

       function Fn() { }
       Fn.prototype = Array.prototype
       let f = new Fn
       console.log(f instanceof Array) // true

       原理：实例对象 instanceof 构造函数Ctor
        - 检测构造函数是否拥有Symbol.hasInstance 属性，如果有这个属性 则基于 Ctor[Symbol.hasInstance](obj)
          Array.[Symbol.hasInstance]([]) -> true ，Array身上和原型上没有Symbol.hasInstance 基于__proto__
          找到 Function 原型上的 Symbol.hasInstance 。
          Function.prototype[Symbol.hasInstance] 存在
        - 无论是否有这个方法，检测的本质都是基于实例的原型链查找是否出现Ctor这个构造函数  


*/



Array[Symbol.hasInstance] = function (obj) {
    return false
}
console.log([] instanceof Array) // true 内置类不允许修改这个属性 改了也没用

function Fn() { }
Fn[Symbol.hasInstance] = function () {
    return false
}
let f = new Fn()
console.log(f instanceof Fn) // true ES5 中也不能修改

Function.prototype[Symbol.hasInstance] = function () {
    return false
}
console.log([] instanceof Array) // true 也不能直接修改

class Fn {
    static [Symbol.hasInstance] = function () {
        return false
    }
}
let f = new Fn()
console.log(f instanceof Fn) // false  es6中可以修改


// --------------------  手撕instanceof ------------------

function myInstanceof(obj, Ctor) {
    let ctorType = typeof Ctor,
        objType = typeof obj,
        reg = /^(object|function)$/i,
        hasInstance,
        proto;
    // 校验Ctor是否是一个对象
    if (Ctor == null || !reg.test(ctorType)) {
        throw new TypeError("Right-hand side of ' instanceof ' is not an object")
    }

    // 校验obj是否是一个对象/函数 原始值类型直接返回false
    if (obj == null || !reg.test(objType)) {
        return false
    }

    // 校验Ctor是否有prototype  箭头函数没有原型...
    if (!Ctor.hasOenProperty('prototye')) {
        throw new TypeError("Function has non-object prototype 'undefined' in instanceof check")
    }

    // 正常检测处理 有[Symbol.hasInstance]这个方法就用这个方法处理
    hasInstance = Ctor[Symbol.hasInstance]
    if (hasInstance) {
        return hasInstance.call(Ctor, obj)
    }
    // 没有[Symbol.hasInstance]这个方法 就在原型链上查找Ctor
    proto = Object.getPrototypeOf(obj)
    while (proto) {
        proto = Object.getPrototypeOf(obj)
    }

}