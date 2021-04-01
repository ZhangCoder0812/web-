// jquery 类型检测实现方式

let _obj = {
    isNumberic: 'Number',
    isBoolean: 'Boolean',
    isString: 'String',
    isNull: 'Null',
    isUndefined: 'Undefined',
    isSymbol: 'Symbol',
    isObject: 'Object',
    isArray: 'Array',
    isRegExp: 'RegExp',
    isDate: 'Date',
    isFunction: 'Function',
    isWindow: 'Window',
},
    _toString = _obj.toString,
    _type = {};
for (let key in _obj) {
    if (!_obj.hasOwnProperty(key)) break;
    let reg = new RegExp("\\[object " + _obj[key] + "\\]")
    // 把_obj的每一项变成函数存到_type中
    _type[key] = val => reg.test(_toString.call(val))
}

console.log(_type.isNumberic(12)) // true
console.log(_type.isBoolean(12)) // false
console.log(_type.isFunction(function aa() { })) // true