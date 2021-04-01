/* 

 柯理化也是高阶函数

*/

// 判断元素的类型

function isType(typing) {
    return function (params) {
        return Object.prototype.toString.call(str) == `[object ${typing}]`
    }
}

let utils = {}
['String', 'Number', 'Boolean'].forEach(method => {
    utils['is' + method] = isType(method)
});

console.log(utils.isNumber());