(function () {
  function Promise(execute) {
    if (typeof execute !== "function") {
      throw new TypeError(`Promise resolve ${execute}is not a function`);
    }
    // 限制必须要new执行使用
    if (!(this instanceof Promise)) {
      throw new TypeError("undefined is not a Promise");
    }
    let _this = this,
      timer = null;
    _this.state = "pending";
    _this.value = undefined;
    _this.onfulfilledCallbacks = [];
    _this.onrejectedCallbacks = [];
    let change = function (state, value) {
      if (_this.state !== "pending") return;
      _this.state = state;
      _this.value = value;

      timer = setTimeout(function () {
        let callbacks =
          state === "fulfilled"
            ? _this.onfulfilledCallbacks
            : _this.onrejectedCallbacks;
        callbacks.forEach((fn) => fn());
        clearTimeout(timer);
        timer = null;
      });
    };
    let resolve = function (result) {
      change("fulfilled", result);
    };
    let reject = function (reason) {
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
      let then;
      try { // 获取then方法可能报错
        then = x.then
      } catch (e) {
        reject(e)
      }
      if (typeof then === 'function') {
        let called;
        try {
          then.call(x, function onfulfilled(y) {
            if (called) return;
            called = true
            resolvePromise(promise, x, resolve, reject)
          }, function onrejected(r) {
            if (called) return;
            called = true
            reject(r)
          })
        } catch (e) {
          if (called) return;
          called = true
          reject(e)
        }
        return;
      }
    }
    resolve(x)
  }

  function common(callback, value, promise, resolve, reject) {
    let run = function () {
      try {
        let x = callback(value);
        resolvePromise(promise, x, resolve, reject)
      } catch (e) {
        reject(e)
      }
    }
    if (isTimeout) {
      let timer = setTimeout(function () {
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
      let _this = this,
        promise;
      if (typeof onfulfilled !== 'function') {
        onfulfilled = function (data) {
          return data
        }
      }
      if (typeof onrejected !== 'function') {
        onrejected = function (reason) {
          throw reason
        }
      }
      promise = new Promise(function (resolve, reject) {
        switch (_this.state) {
          case "fulfilled":
            setTimeout(() => {
              common(onfulfilled, true, _this.value, promise, resolve, reject)
            })
            break;
          case "rejected":
            setTimeout(() => {
              common(onrejected, true, _this.reason, promise, resolve, reject)
            })
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
    // catch 就是一个没有成功回调的then方法
    catch: function (onrejected) {
      return this.then(null, onrejected)
    },
    finally: function () { },
  };

  // 静态属性
  //Promise.resolve返回一个成功的Promise实例
  Promise.resolve = function (result) {
    return new Promise(function (resolve) {
      resolve(result)
    })
  };
  //Promise.reject返回一个失败的Promise实例
  Promise.reject = function (reason) {
    return new Promise(function (_, reject) {
      reject(reason)
    })
  };
  function isPromise(p) {
    return (typeof p === 'object' || typeof p === 'function') && typeof p.then === 'function'
  }
  Promise.all = function (promises) {
    if (!Array.isArray(promises)) {
      throw new TypeError('promises must be an Array')
    }
    let n = 0,
      result = [];
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        let p = promises[i]
        if (!p) { // 不是promise变成promise
          p = Promise.resolve(p)
        }
        p.then(data => {
          n++;
          if (n === promises.length) {
            resolve(result)
          } else {
            result[i] = data
          }
        }).catch(reason => {
          reject(reason)
        })
      }
    })
  };
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

let p1 = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    resolve(100);
    // reject(200);
    console.log(4);
  }, 1000);
});

let p2 = p1.then(
  (data) => {
    console.log("ok->", data);
  },
  (err) => {
    console.log("err->", err);
  }
);

p2.then(
  (data) => {
    console.log("ok->", data);
    console.log(a)
  },
  (err) => {
    console.log("err->", err);
  }
).catch(err => {
  console.log('err', err)
})

let query = function (time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // if (time == 2000) {
      //   reject(time)
      // }
      resolve(time)
    }, time)
  })
}

Promise.all([query(1000), query(3000), query(2000), 4000]).then(data => {
  console.log(data)
}, err => {
  console.log('err=>', err)
})