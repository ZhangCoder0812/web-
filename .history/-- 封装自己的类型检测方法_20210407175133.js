
let class2type = {},
    toString = class2type.toString, // Object.prototype.toString
    hasOwn = class2type.hasOwnProperty, // Object.prototype.hasOwnProperty
    fnToString = hasOwn.toString, // hasOwn是一个函数
    ObjectFunctionString = fnToString.call(Object);