(function () {
  function Promise(execute) {
    if (typeof execute !== "function") {
      throw new TypeError(`Promise resolve ${execute}is not a function`);
    }
    // 限制必须要new执行使用
    if (!(this instanceof Promise)) {
      throw new TypeError("undefined is not a Promise");
    }
    var _this = this,
      timer = null;
    _this.state = "pending";
    _this.value = undefined;
    _this.onfulfilledCallbacks = [];
    _this.onrejectedCallbacks = [];
    var change = function (state, value) {
      if (_this.state !== "pending") return;
      _this.state = state;
      _this.value = value;

      timer = setTimeout(function () {
        var callbacks =
          state === "fulfilled"
            ? _this.onfulfilledCallbacks
            : _this.onrejectedCallbacks;
        callbacks.forEach((fn) => fn());
        clearTimeout(timer);
        timer = null;
      });
    };
    var resolve = function (result) {
      change("fulfilled", result);
    };
    var reject = function (reason) {
      change("rejected", reason);
    };
    try {
      execute(resolve, reject);
    } catch (e) {
      change("rejected", e.message);
    }
  }

  function resolvePromise(promise, x, resolve, reject) {
    // promise 每一次then返回的新的promise实例   
    if (x === promise) throw new TypeError('Chaining cycle detected for promise #<Promise>')
    if (x !== null && /^(object|function)$/i.test(typeof x)) {
      var then;
      try { // 获取then方法可能报错
        then = x.then
      } catch (e) {
        reject(e)
      }
      if (typeof then === 'function') {

      }
      resolve(x)
      return;
    }
    resolve(x)
  }

  function common(callback, isTimeout, value, promise, resolve, reject) {
    var run = function () {
      try {
        var x = callback(value);
        resolvePromise(promise, x, resolve, reject)
      } catch (e) {
        reject(e)
      }
    }
    if (isTimeout) {
      var timer = setTimeout(function () {
        run()
        clearTimeout(timer);
        timer = null;
      });
    } else {
      run()
    }
  }

  Promise.prototype = {
    constructor: Promise,
    then: function (onfulfilled, onrejected) {
      var _this = this,
        promise;
      promise = new Promise(function (resolve, reject) {
        switch (_this.state) {
          case "fulfilled":
            common(onfulfilled, true, _this.value, promise, resolve, reject)
            break;
          case "rejected":
            common(onrejected, true, _this.reason, promise, resolve, reject)
            break;
          default:
            // 包了一层便于在这里执行获取x
            _this.onfulfilledCallbacks.push(function () {
              common(onfulfilled, false, _this.value, promise, resolve, reject)
            });
            _this.onrejectedCallbacks.push(function () {
              common(onrejected, false, _this.reason, promise, resolve, reject)
            });
        }
      })
      return promise
    },
    catch: function () { },
    finally: function () { },
  };

  // 静态属性
  Promise.resolve = function () { };
  Promise.reject = function () { };
  Promise.all = function () { };
  Promise.any = function () { };

  if (typeof Symbol !== "undefined") {
    Promise.prototype[Symbol.toStringTag] = "Promise";
  }

  if (typeof window !== "undefined") {
    window.Promise = Promise;
  }

  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = Promise;
  }
})();

let p = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    resolve(100);
    // reject(200);
    console.log(4);
  }, 1000);
});
console.log(2);
p.then(
  (data) => {
    console.log("ok->", data);
  },
  (err) => {
    console.log("err->", err);
  }
);

p.then(
  (data) => {
    console.log("ok->", data);
  },
  (err) => {
    console.log("err->", err);
  }
);
console.log(3);
