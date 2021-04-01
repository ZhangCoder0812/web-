
const STATUS = {
    PANDING: "PANDING",
    FULFILLED: "FULFILLED",
    REJECTED: "REJECTED"
}

function resolvePromise(x, promise2, resolve, reject) {
    // 1. 看x是普通值还是Promise 是Promise 就使用他的状态
    if (x == promise2) {
      // x不能和上一个Promise实例相等 循环引用了
      return reject(new TypeError('出错了'));
    }
    // 2. 看x是不是对象或函数 这里判断不用 instranceOf 是为了兼容别人的Promise 不能保证别人的Promise实例(x)
    // 和自己写的Promise实例是同一个实例
    if ((typeof x === 'object' && x !== null) || typeof x == 'function') {
      // 是对象或函数 只要有then方法就认为是Promise ，PromiseA+规范说明的
      let called; // 用于判断Promise是否执行过了 执行过了就return
      try {
        // 取then时可能出错
        let then = x.then; // 拿出来防止每次取then时候出错 直接复用上次的
        if (typeof then == 'function') {
          // then属性是函数 认为x是一个Promise 就调用返回的Promise 作为下一个then的结果
          then.call(
            x,
            (y) => {
              // 上一个then返回的Promise 成功的回调
              if (called) return;
              called = true;
              // reslove 执行结果可能又是一个Promise 递归调用 直到返回一个普通值 
              resolvePromise(y, promise2, resolve, reject)
            },
            (r) => {
              // 上一个then返回的Promise 失败的回调
              if (called) return;
              called = true;
              reject(r);
            },
          );
        } else {
          // then属性不是函数 认为x不是Promise 直接resolve
          resolve(x);
        }
      } catch (e) {
        if (called) return;
        called = true;
        reject(e);
      }
    } else {
      // 不是函数或对象就肯定不是 Promise 直接resolve
      resolve(x);
    }
    // 3. 不是Promise就直接 resolve
  }

class Promise {
    constructor(executor) {
        this.status = STATUS.PANDING
        this.value = undefined
        this.reason = undefined
        this.onResolveCallbacks = []
        this.onFulfilledCallbacks = []
        const resolve = (val) => {
            if (this.status === STATUS.PANDING) {
                this.status = STATUS.FULFILLED
                this.value = val
                this.onFulfilledCallbacks.forEach(fn => fn())
            }
        }
        const reject = (reason) => {
            if (this.status === STATUS.PANDING) {
                this.status = STATUS.REJECTED
                this.reason = reason
                this.onFulfilledCallbacks.forEach(fn => fn())
            }
        }
        try {
            executor(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }
    then(onFulfilled, onRejected) {
        let promise2 = new Promise((resolve, reject) => {
            if (this.status === STATUS.FULFILLED) {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.value);
                        resolvePromise(x, promise2, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                }, 0);
            }
            if (this.status === STATUS.REJECTED) {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason)
                        resolvePromise(x, promise2, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0);
            }
            if (this.status === STATUS.PANDING) {
                this.onResolveCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onFulfilled(this.value)
                            resolvePromise(x, promise2, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }
                    }, 0);
                })
                this.onFulfilledCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onRejected(this.reason)
                            resolvePromise(x, promise2, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }
                    }, 0);
                })
            }
        })
        return promise2
    }
}

module.exports = Promise