

// 判断元素的类型

// function isType(typing) {
//     return function (val) {
//         return Object.prototype.toString.call(val) == `[object ${typing}]`
//     }
// }

// let utils = {};
// ['String', 'Number', 'Boolean'].forEach(method => {
//     utils['is' + method] = isType(method)
// });

// console.log(utils.isNumber(123));


/* 

 柯理化也是高阶函数,每次传入一个参数，返回一个函数，
 当传入参数和接受参数一致时 就会执行

*/

function sum(){

}

// 柯理化函数
sum(1)(2)(3)(4)(5)


// 偏函数 类似柯理化函数 传入参数形式不固定
sum(1,2)(3)()