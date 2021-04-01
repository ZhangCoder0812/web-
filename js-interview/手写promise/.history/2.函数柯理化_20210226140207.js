/* 

 柯理化也是高阶函数

*/

// 判断元素的类型

function isType(str, typing) {
    return Object.prototype.toString.call(str) == `[object ${typing}]`
}

isType('hello', 'String')

['String' , 'Number' , 'Boolean'].array.forEach(element => {
    
});