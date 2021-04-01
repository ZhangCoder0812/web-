/* 

 柯理化也是高阶函数

*/

// 判断元素的类型

function isType( typing) {
    return Object.prototype.toString.call(str) == `[object ${typing}]`
}

isType('hello', 'String')

let utils = {}
['String', 'Number', 'Boolean'].forEach(method => {
    utils['is' + method] = isType(method)
});