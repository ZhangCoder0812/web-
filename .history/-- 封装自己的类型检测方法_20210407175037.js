
let class2type = {},
    toString = class2type.toString, // Object
    hasOwn = class2type.hasOwnProperty,
    fnToString = hasOwn.toString,
    ObjectFunctionString = fnToString.call(Object);