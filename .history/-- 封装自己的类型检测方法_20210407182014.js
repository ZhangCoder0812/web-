let class2type = {},
    toString = class2type.toString, // Object.prototype.toString
    hasOwn = class2type.hasOwnProperty, // Object.prototype.hasOwnProperty
    fnToString = hasOwn.toString, // hasOwn是一个函数 拿到函数上的toString方法 Function.prototype.toString 将函数变成字符串
    ObjectFunctionString = fnToString.call(Object),
    arrType;
/*
 => Function.prototype.toString.call(Object)
    让Object调用Function原型上的toString 把Object函数变成字符串
*/

//检测是否是函数
const isFunction = function (obj) {
    return (
        typeof obj === "function" &&
        typeof obj.nodeType !== "number" &&
        typeof obj.item !== "function"
    );
};

const isWindow = function (obj) {
    /* 
         window 中有个key为window 值也是window 
         window:{
             window:window,
             ...
         }
    */
    return obj != null && obj === obj.window;
};

// 封装类型检测方法
arrType = ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error', 'Symbol']
arrType.forEach(name=>{
    class2type[""]
})

const toType = function (obj) {
    // 检测 null 和 undefined
    if (obj == null) return obj + ""; // 'null' 'undefined'

    // 是引用数据类型用toString检测 ，不是引用数据类型用typeof检测
    return typeof obj === "object" || typeof obj === "function"
        ? class2type[toString.call(obj)] || "object"
        : typeof obj;
};
