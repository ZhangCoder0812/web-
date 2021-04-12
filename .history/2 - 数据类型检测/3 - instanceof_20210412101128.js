/* 
/instanceof (在原型链查找) 不能检测原始类型值 只能检测引用类型值 检测引用类型也有局限
     检测当前实例是否属于这个类，并不是数据类型检测，可以依托特点 检测出类型。
       并不可靠 因为原型 prototype 容易被修改。
       局限性：不能检测基本数据类型

*/

//1. 只能校验是否属于某个实例
console.log([] instanceof Array)   // true 相当于 console.log([].__proto__ === Array.prototype)
console.log([] instanceof Object)  // true 相当于 console.log([].__proto__.__proto__ === Array.prototype)

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




