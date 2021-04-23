
// 四则运算中的转化 + - * / !

/*
    数字和非字符串相加

    console.log(1 + true) // 2
    console.log(1 + false) // 1
    console.log(1 + null) // 1
    console.log(1 + undefined)// NaN
    console.log(1 + {})// 1[object Object]

    true => 1
    false => 0
    null => 0
    undefined 不是数字
    {}  不是数字

    {} 不能转换为number 就转换成字符串 ，要有一方为
                 字符串 就会变成字符串拼接
    对象有有两个方法 valueOf  toString()
    let obj = {
        valueOf(){
            return 100
        }
        toString(){
            return 200
        }
    }
    console.log(true+obj) // 101 {}转换成字符串会先调用valueOf方法

    原本对象上的valueOf方法返回的还不是一个原始数据类型时才会再次调用toString方法
    console.log({}.valueOf()) // {}

    let obj = {
        valueOf(){
            return {}
        },
        toString(){
            return 200
        }
    }
    console.log(true+obj) // 201 valueOf方法返回的还不是一个字符串时才会再次调用toString方法

    若toString返回的还不是一个原始数据类型就会报错
    let obj = {
        valueOf(){
            return {}
        },
        toString(){
            return {}
        }
    }
    console.log(true+obj) // 报错

    改写。 [Symbol.toPrimitive] 方法优先级更高，
    会覆盖 valueOf  toString()，[Symbol.toPrimitive]存在就不会执行 valueOf  toString()，
    let obj = {
        [Symbol.toPrimitive]() {
            return 500
        },
        valueOf() {
            return {}
        },
        toString() {
            return 21312
        }
    }
    console.log(true + obj) // 501

    其他类型调用toString 是转化为字符串
    object调用toString是检测类型 object调用valueOf是转换为为字符串
    console.log({name:"321"}.valueOf())  // { name: '321' } object类型
    console.log({name:"321"}.toString()) // "[object Object]"
    console.log([12,13].toString()) // "12,13"
    console.log(function aa(){}.toString()) // "function aa(){}"
    console.log(Object.prototype.toString.call(12))  // [object Number]

*/

/*

    非数字相加
    console.log(true + true) // 2
    console.log(true + undefined) // NaN
    console.log(true + {}) // true[object Object]

*/


/*

    console.log(1 + '123') // 1123
    console.log(+'123') // 123
    console.log(typeof +'123') // number + - 和 ！一样也会类型转化
    console.log(1 + +'123') // 124
    console.log(1 + -'123') // -122

*/


// 比较运算中的转化 > = <

/*

   字符串 和 字符串 比较
        console.log('a' < 'b') //true 转化为 ASCII 码比较 'a'.charCodeAt(0)
        console.log('a' < 'bettery') //true  只比较第一位

   数字 和 字符串 比较
        console.log(1 < '123') //true 字符串若能转化为数字就转化为数字比较
        console.log(1 < 'aaa') // false   不能转化为数字就返回 false

    ==
         null ,undefined 相互比较返回true
            console.log(null == undefined)   // true
            console.log(null === undefined)   // false === 不相等
            console.log(null == null)   // true
            console.log(undefined == undefined)   // true

         null ,undefined 和其他类型的值比较返回的都是 false
            console.log(null == 0)   // false
            console.log(undefined == 0)   // false
            console.log(null == NaN)   // false
            console.log(undefined == NaN)   // false

         NaN 和谁比较都是 false 包括自己
            console.log(NaN == NaN)   // false
            console.log(NaN == 1)   // false

         对象比较为false 比较的是地址
            console.log({} == {})  // false

         如果是布尔类型会转化为数字
            console.log(1 == true) // true

         对象 和 原始数据类型比较时 会将对象转换为字符换
            console.log(1 == {}) // false
            console.log({}.valueOf()) // {}
            console.log({}.toString()) // '[object Object]'
            console.log({} == '[object Object]') // true

        面试题：
        console.log([] == ![]) // true 单目运算优先级最高
                    [] 空数组为 true ， ![] 为false
                    就变成了 console.log([] == false) 如果是布尔类型会转化为数字
                    就变成了 console.log([] == 0)  [].valueOf() = []
                    就变成了 console.log([] == 0)  [].toString() = ''
                    就变成了 console.log('' == 0)  数字 和 字符串 比较 会将字符串转换为数字
                    就变成了 console.log(0 == 0)
*/

// console.log([12, 13].toString()) // "12,13"

// console.log([12, 13].__proto__ == Array.prototype) // "12,13"
// console.log([12, 13].__proto__.__proto__.toString()) // [object Object]


let arr = [1, 2]
arr.push(3) // arr.__proto__.push(3)
console.log(arr)
console.log(Object.prototype.toString.call(12))  // [object Number]
console.log({}.toString.call(12))  // [object Number]

