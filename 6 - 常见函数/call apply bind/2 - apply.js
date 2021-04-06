// 和call一样只有一个区别，传递的参数是数组 fn.apply(obj,[1,2,3,4])

Function.prototype.apply = function (ctx, args) {
  if (args && !Array.isArray(args)) {
    throw new TypeError("args must be Array");
  }
  ctx = ctx ? Object(ctx) : window;
  let key = Symbol('key');
  ctx[key] = this;
  let res = args ? ctx[key](args) : ctx[key]();
  delete ctx[key];
  return res;
};

function fn1() {
  console.log(this, 11, arguments);
}

function fn2() {
  console.log(this, 22, arguments);
}

fn1.apply(fn2, [7, 8, 9]);
