/* 

 数据类型检测：

   - typeof 
       返回结果是个字符串 typeof typeof typeof [10,20] => 'string'
       检测基本数据类型可以，特俗：typeof null = 'object' 
       检测引用数据类型 除了 typeof function = 'function' 其余都是 'object'
       
   - instanceof 
       监测当前实例是否属于这个类，并不是数据类型检测，可以依托特点 检测出类型。
       并不可靠 因为原型 prototype 容易被修改。

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

          Array[Symbol.hasInstance] = function (obj) {
                return false
          }
          console.log([] instanceof Array) // true 内置类不允许修改这个属性 改了也没用

          function Fn() { }
          Fn[Symbol.hasInstance] = function () {
              return false
          }
          let f = new Fn()
          console.log(f instanceof Fn) // true 


*/




class Fn {
    static [Symbol.hasInstance] = function () {
        return false
    }
}

let f = new Fn()
console.log(f instanceof Fn) // false  es6中 