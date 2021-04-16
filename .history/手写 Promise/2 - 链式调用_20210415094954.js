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
      // promise 每一次then返回的   
  }

  Promise.prototype = {
    constructor: Promise,
    then: function (onfulfilled, onrejected) {
      var _this = this,
        timer = null,
        promise;
      promise = new Promise(function (resolve, reject) {
        switch (_this.state) {
          case "fulfilled":
            timer = setTimeout(function () {
              try {
                var x = onfulfilled(_this.value);
                resolvePromise(promise, x, resolve, reject)
              } catch (e) {
                reject(e)
              }
              clearTimeout(timer);
              timer = null;
            });
            break;
          case "rejected":
            timer = setTimeout(function () {
              try {
                var x = onrejected(_this.value);
                resolvePromise(promise, x, resolve, reject)
              } catch (e) {
                reject(e)
              }
              clearTimeout(timer);
              timer = null;
            });
            break;
          default:
            // 包了一层便于在这里执行获取x
            _this.onfulfilledCallbacks.push(function () {
              try {
                var x = onfulfilled.call(_this, _this.value)
                resolvePromise(promise, x, resolve, reject)
              } catch (e) {
                reject(e)
              }
            });
            _this.onrejectedCallbacks.push(function () {
              try {
                var x = onrejected.call(_this, _this.reason)
                resolvePromise(promise, x, resolve, reject)
              } catch (e) {
                reject(e)
              }
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
    //resolve(100);
    reject(200);
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
