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

/* -----------------------  检测是否是函数 ------------------------- */
const isFunction = function (obj) {
    return (
        typeof obj === "function" &&
        typeof obj.nodeType !== "number" &&
        typeof obj.item !== "function"
    );
};

/* -----------------------  检测是否是window ------------------------- */
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

/* -----------------------  封装类型检测方法 ------------------------- */

/*  
    class2type = {
        [object Array]: "array"
        [object Boolean]: "boolean"
        [object Date]: "date"
        [object Error]: "error"
        [object Function]: "function"
        [object Number]: "number"
        [object Object]: "object"
        [object RegExp]: "regexp"
        [object String]: "string"
        [object Symbol]: "symbol"
    }
*/

/* 

  const toType = function (obj) {
    // 检测 null 和 undefined
    if (obj == null) return obj + ""; // 'null' 'undefined'

    // 是引用数据类型用toString检测 ，不是引用数据类型用typeof检测
    return typeof obj === "object" || typeof obj === "function"
        ? class2type[toString.call(obj)] || "object"
        : typeof obj;
  };
 */
/* 
    const toType = function (obj) {
    if (obj == null) return obj + "";
    let reg = /^\[object (\w+)\]$/;
    return typeof obj === "object" || typeof obj === "function"
        ? toString.call(obj).match(reg)[1].toLowerCase()
        : typeof obj;
    };
 */

const toType = function (obj) {
    if (obj == null) return obj + "";
    let type = typeof obj;
    if (/(object|function)/i.test(type)) {
        type = toString.call(obj);
        let [, res = "object"] = type.match(/^\[object (\w+)\]$/) || [];
        return res.toLowerCase();
    }
    return type;
};

console.log(toType(1));

/* -----------------------  检测是否是一个纯粹对象 ------------------------- */
const isPlainObject = function (obj) {
    let proto, Ctor;
    if (!obj || toString.call(obj) !== "[object Object]") {
        // 没传或者传的不是对象数据类型 返回false
        return false;
    }
    if (!proto) {
        // 没有原型链的对象是纯粹对象
        return true;
    }
    // 判断这个对象有没有constructor属性 有就获取 没有就是false
    Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
    return (
        // 将该构造函数转为字符串 和 Object转为字符串相比较 如果一样就是纯粹对象
        // 即 Ctor === Object
        typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString
    );
};

/* ---- 
       检测对象是否为空对象  (不包括原型链上属性) 
--------  */
// jquery方式
const isEmptyObject = function (obj) {
    var name;
    for (name in obj) {
        // 遍历该对象 能遍历 则肯定有属性 弊端：不能遍历Symbol属性 而且可以遍历到可枚举的公共属性
        return false;
    }
    return true;
};

// 自定义 isEmptyObject  考虑Symbol属性
const isEmptyObject = function (obj) {
    if (!obj || !/(object|function)/i.test(typeof obj)) {
        // 传入的不是对象类型
        return false;
    }
    let keys = Object.keys(obj); //不会拿到原型链上属性
    if (typeof Symbol !== "undefined") {
        // 判断六拉你去是否支持Symbol
        keys = [...keys, Object.getOwnPropertySymbols(obj)];
    }
    return keys.length === 0;
};


/* ------ 
   检测是否是一个有效数字 10 或者 new Number(10) 或者 '10' ,'10a'不是有效数字
--------- */
const isNumeric = function (obj) {
    let type = toType(obj);
    return (type === "number" || type === "string") && !isNaN(obj);
};

/* ------ 
    检测是否是数组或类数组
--------- */
const isArrayLike = function () {
    // 判断是否存在 是否有length属性 获取length属性
    var length = !!obj && "length" in obj && obj.length,
        type = toType(obj);
    if (isFunction(obj) || isWindow(obj)) {
        // 排除函数和window ，函数和window也有length属性 不是数组或类数组
        return false;
    }
    // length===0 空的类数组 , length不等于0的类数组 检测length值是不是number类型 并且 length>0  且最大索引在该类数组中 则认为是连续索引的类数组
    return (
        type === "array" ||
        length === 0 ||
        (typeof length === "number" && length > 0 && length - 1 in obj)
    );
};
