
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
