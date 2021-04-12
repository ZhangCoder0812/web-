/* 

  instanceof (在原型链查找) 
       检测当前实例是否属于这个类，并不是数据类型检测，可以依托特点 检测出类型。
       并不可靠 因为原型 prototype 容易被修改。
       局限性：不能检测基本数据类型 只能检测引用类型值 检测引用类型也有局限

*/

//1. 只能校验是否属于某个实例
console.log([] instanceof Array)   // true 相当于 console.log([].__proto__ === Array.prototype)
console.log([] instanceof Object)  // true 相当于 console.log([].__proto__.__proto__ === Array.prototype)
console.log(1 instanceof Number) // false 不会装箱处理 原始值类型没有原型链 所以为false 
console.log(new Number(1) instanceof Number) // true  


// 2.  不能校验原始类型
console.log('wade' instanceof String) // false  因为 instanceof 只能校验是否属于某个实例 不能校验原始类型

//3.  只要在当前实例原型链是上出现过的类 都为true
function fn() {
    console.dir(arguments) //  arguments 类数组 原型链直接到Object 没有Array
    console.log(arguments instanceof Array) //false
    arguments.__proto__ = Array.prototype // 强制改变原型链 instanceof 就具有检测就不准确了
    console.log(arguments instanceof Array) //true
}
fn()

function Fn() { }
Fn.prototype = Array.prototype
let f = new Fn
console.log(f instanceof Array) // true
/* 
    原理：实例对象 instanceof 构造函数Ctor
        - 检测构造函数是否拥有Symbol.hasInstance 属性，如果有这个属性 则基于 Ctor[Symbol.hasInstance](obj)
          Array.[Symbol.hasInstance]([]) -> true ，Array身上和原型上没有Symbol.hasInstance 基于__proto__
          找到 Function 原型上的 Symbol.hasInstance 。
          Function.prototype[Symbol.hasInstance] 存在
        - 无论是否有这个方法，检测的本质都是基于实例的原型链查找是否出现Ctor这个构造函数
 */


// instanceof 原理

function myInstanceOf(A, B) {
    B = B.prototype
    A = A.__proto__
    while (true) { // 不停的在原型链向上查找
        if (A === null) { // Object.prototype.__proto__ = null 到头了
            return false
        }
        if (A === B) {
            return true
        }
        A = A.__proto__ // 循环一次改变一次
    }
}

class A { }
let a = new A()
myInstanceOf(a, A)


// instanceof 会默认调用 Symbol.hasInstance 方法 重写Symbol.hasInstance校验原始类型
class ValidateStr {
    static [Symbol.hasInstance](x) {
        return typeof x === 'string'
    }
}

console.log('wade' instanceof ValidateStr) // true




