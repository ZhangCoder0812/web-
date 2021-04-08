
let class2type = {},
    toString = class2type.toString, // Object.prototype.toString
    hasOwn = class2type.hasOwnProperty, // Object.prototype.hasOwnProperty
    fnToString = hasOwn.toString, // hasOwn是一个函数 拿到函数上的toString方法 Function.prototype.toString 将函数变成字符串
    ObjectFunctionString = fnToString.call(Object);