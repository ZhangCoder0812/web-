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

/* ----------------------- isFunction  检测是否是函数 ------------------------- */
const isFunction = function (obj) {
  return (
    typeof obj === "function" &&
    typeof obj.nodeType !== "number" &&
    typeof obj.item !== "function"
  );
};

/* ----------------------- isWindow  检测是否是window ------------------------- */
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
arrType = [
  "Boolean",
  "Number",
  "String",
  "Function",
  "Array",
  "Date",
  "RegExp",
  "Object",
  "Error",
  "Symbol",
];
arrType.forEach((name) => {
  class2type["[object " + name + "]"] = name.toLowerCase();
});
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

/* -----------------------  jsonToUrl 检测是否是一个纯粹对象 ------------------------- */
const jsonToUrl = function (obj) {
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

/* ---- isEmptyObject 检测对象是否为空对象  (不包括原型链上属性)  --------  */
/*
 jquery方式 遍历该对象 能遍历 则肯定有属性 弊端：不能遍历Symbol属性 而且可以遍历到可枚举的公共属性
    const isEmptyObject = function (obj) {
        var name;
        for (name in obj) {
            return false;
        }
        return true;
    };
 */

// 自定义 isEmptyObject  考虑Symbol属性
const isEmptyObject = function (obj) {
  if (!obj || !/(object|function)/i.test(typeof obj)) {
    // 传入的不是对象类型
    return false;
  }
  let keys = Object.keys(obj); //不会拿到原型链上属性
  if (typeof Symbol !== "undefined") {
    // 判断浏览器是否支持Symbol
    keys = [...keys, Object.getOwnPropertySymbols(obj)];
  }
  return keys.length === 0;
};

/* ----------------------- isNumeric 检测是否是一个有效数字 ----------------------- */
//  10 或者 new Number(10) 或者 '10' ,'10a'不是有效数字
const isNumeric = function (obj) {
  let type = toType(obj);
  return (type === "number" || type === "string") && !isNaN(obj);
};

/* --------------------  isArrayLike  检测是否是数组或类数组  ------------------- */
const isArrayLike = function (obj) {
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

/* --------------------  toParams  把json数据变成urlencoded格式  ------------------- */
function jsonToUrl(json) {
  return Object.keys(json)
    .map(function (key) {
      // body...
      return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
    })
    .join("&");
}

/* --------------------  each  遍历对象/数组/类数组  ------------------- */

const each = function (obj, callback) {
  if (obj == null || typeof obj !== "object") {
    throw new TypeError("obj must be Array/ArrayLike/Object");
  }
  if (typeof callback !== "function") {
    // 传入的callback不是函数就赋值个函数 防止报错
    callback = function () { };
  }
  let i = 0;
  if (isArrayLike(obj)) {
    for (; i < obj.length; i++) {
      if (callback.call(obj[i], obj[i], i) === false) {
        break;
      }
    }
  } else {
    let keys = Object.keys(obj);
    // 如果浏览器支持Symbol 将Symbol属性和非Symbol合并在一起 单纯的for in 遍历不出Symbol属性
    if (typeof Symbol !== "undefined") {
      keys = [...keys, ...Object.getOwnPropertySymbols(obj)];
    }
    for (; i < keys.length; i++) {
      let key = keys[i];
      // obj[key] 属性值 ，keys[i]属性
      if (callback.call(obj[key], obj[key], key) === false) {
        break;
      }
    }
  }
};

/* -------------------- merge 实现多个对象的合并「支持深度合并」类似Object.assign()  ------------------- */
/* 
    merge(obj1,obj2,obj3...) 返回obj1
    merge(true,obj1,obj2,obj3...) 深度合并
    
    浅合并： 比较第一级，相同直接覆盖
    Object.assign(obj1,obj2) 将obj2合并到obj1, obj1会被改变 obj2不会被改变
    {
        url: '/api/list',
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: { lx: 'test', from: 'weixin' }
    }
    
    Object.assign({},obj1,obj2)  这样obj1，obj2都不会被改变。
*/
const merge = function () {
  let options, // 拿哪个对象替换它
    target = arguments[0] || {}, // 传入的第一个参数，要被替换的对象
    i = 1, //如果target为布尔值 则从第二个参数开始才是要合并的对象
    length = arguments.length, //传了几个对象
    deep = false, // 默认浅合并
    treated = arguments[length - 1]; // 用来防止死递归 记录哪一层级的对象被处理过
  // 有treated属性表示是我自己用来存储的数组 不是传入要合并的数组

  // 第一个参数是布尔值 则表示设置了深浅合并
  if (typeof target === "boolean") {
    deep = target;
    // 第二个参数开始才是要合并的对象
    target = arguments[i] || {};
    i++;
  }

  if (Array.isArray(treated) && treated.treated) {
    length--; // 参数的最后一项被我们手动加上了一个用来处理死递归的数组 那么length应该-1
  } else {
    // 参数的最后一项是数组 但没有treated属性 则表示是用来合并的数组
    // 那我们手动添加一个数组 并加上treated属性表识别
    treated = [];
    treated.treated = true;
  }
  // 传入的必须是对象 字符串等不能合并
  if (typeof target !== "object" && !isFunction(target)) {
    target = {};
  }
  for (; i < length; i++) {
    options = arguments[i];
    if (options == null) {
      continue;
    }
    // 处理过这个对象就直接返回
    if (treated.includes(options)) {
      return options;
    }
    treated.push(options); // 第一次处理往treated数组中添加 下次就不用再处理了
    each(options, (value, key) => {
      let valueIsArray = Array.isArray(value),
        valueIsObject = jsonToUrl(value),
        clone = target[key]; // 要克隆的值
      // 深合并 deep=true ， value属性值存在 且是数组/纯粹对象
      if (deep && value && (valueIsArray || valueIsObject)) {
        // 替换的这项是数组 被替换的这项不是数组
        if (valueIsArray && !Array.isArray(target[key])) {
          clone = []; // 保证替换的和被替换的都是数组
        }
        // 替换的这项是对象 被替换的这项不是对象
        if (valueIsObject && !jsonToUrl(target[key])) {
          clone = {}; // 保证替换的和被替换的都是对象
        }
        target[key] = merge(deep, clone, value, treated); // 递归
      } else if (value !== undefined) {
        // 浅合并
        target[key] = value;
      }
    });
  }
  return target;
};

let obj1 = {
  url: "/api/list",
  method: "GET",
  headers: {
    "X-Token": "123456",
    "Content-Type": "application/json",
  },
};

let obj2 = {
  method: "POST",
  data: {
    lx: "test",
    from: "weixin",
  },
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};
obj2.xxx = obj2; // 循环引用
console.log(merge(true, obj1, obj2)); // obj1会被改变
console.log(merge(true, {}, obj1, obj2)); // 加个{} 不会影响obj1

export { jsonToUrl, jsonToUrl };
