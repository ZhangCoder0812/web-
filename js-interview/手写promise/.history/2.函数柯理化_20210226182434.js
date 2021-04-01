

// 判断元素的类型

function isType(typing) {
    return function (val) {
        return Object.prototype.toString.call(val) == `[object ${typing}]`
    }
}

let utils = {};
['String', 'Number', 'Boolean'].forEach(method => {
    utils['is' + method] = isType(method)
});

console.log(utils.isNumber(123));


/* 

 柯理化也是高阶函数,每次传入一个参数，返回一个函数，
 当传入参数和接受参数一致时 就会执行
 核心 : 递归
 用途： redux -> compose , node -> middleware , next ,router.beforeEach()
 也是一个闭包

*/

// 这里的参数要固定个数 参数多少个 就柯理化多少个 
// 不固定的话就没法知道什么时候收集完 就要修改 toString 方法 没有什么实际意义
// function sum(a, b, c, d, e) {
//     return a + b + c + d + e
// }

// // arr 就是收集每次调用时传入的参数
// const curring = (fn, arr = []) => {
//     let len = fn.length // 函数的length就是参数的个数
//     return function (...args) {
//         let newArgs = [...arr, ...args]
//         // 传入的参数和函数规定参数一致时就执行
//         // 不一致就说明没有收集完 再递归
//         if (newArgs.length == len) {
//             return fn(...newArgs)
//         } else {
//             return curring(fn, newArgs)
//         }
//     }
// }

// let newSum = curring(sum)

// // 柯理化函数
// console.log(newSum(1)(2)(3)(4)(5))

// // 偏函数 类似柯理化函数 传入参数形式不固定
// console.log(newSum(1, 2)(3)(4, 5))





function sum(a, b, c, d, e) {
    return a + b + c + d + e
}

function curring(fn, arr = []) {
    let len = fn.length
    return function () {
        let newArgs = [...arr, ...args]
        if (len == arr.length) {
            fn(...newArgs)
        }else{
            return this()
        }
    }
}

let newSum = curring(sum)
newSum(1)(2, 3)(4)(5)