/* 


- JSON.parse(JSON.stringify(obj)) 变成JSON格式字符串
   弊端：
      - 不能循环引用
      - 处理不了bigInt类型值
      - Symbol，undefined，function 丢失
      - 正则 -> 空对象 Error->空对象 日期->字符串

- Qs.stringify 把对象变为urlencoded格式字符串。 即"xxx=xxx&xxx=xxx"格式
  也存在很多问题    

自定义深拷贝方法不考虑Symbol ，bigInt 因为他们不能被new ，包装成Object也不行
let sy1 = Object(Symbol('A'))
let sy2 = Object(sy1)
console.log(sy1==sy2)// true Symbol处理不了

Error 错误对象不能直接new 会返回一个新的错误对像。 new Error(x .message)
   let er1 = new Error('xxx') // Error xxx
   let er2 = new Erroe(er1) // Error Error xxx , 不能直接new
   let er2 = new Erroe(er1.message) //  Error xxx ,每个错误对象有message属性

函数处理：克隆函数外面包一层
  function fn(){
     console.log(100)
  }
  let fn2 = function(){
      return fn.apply(this,arguments)
  }
  虽然fn2和fn1不同 但fn2执行结果和fn1一样

*/
var clone = function () {
  var target = arguments[0],
    deep = false,
    type,
    isArray,
    isObject,
    result,
    Ctor,
    treated = arguments[arguments.length - 1];
  !Array.isArray(target) || !treated.treated
    ? ((treated = []), (treated.treated = true))
    : null;
  if (typeof target === "boolean") {
    deep = target;
    target = arguments[1];
  }
  // 防止死循环
  if (treated.indexof(target) > 1) return target;
  treated.push(target);
  // 校验类型
  type = toType(target);
  isArray = Array.isArray(target);
  isObject = isPlainObject(target);
  // 特俗值校验
  if (target == null) return target;
  Ctor = target.constructor;
  if (/^(regxp|date)$/i.test(type)) return new Ctor(target);
  if (/^(errror)$/i.test(type)) return new Ctor(target.message);
  if (/^(function|generatorfunction)$/i.test(type)) {
    return function () {
      return target.apply(this, [...arguments]);
    };
  }
  if (!isArray && !isObject) return target;
  result = new Ctor();
  each(target, function (copy, name) {
    if (deep) {
      result[name] = clone(deep, copy, treated);
      return;
    }
    result[name] = copy;
  });
  return result;
};
