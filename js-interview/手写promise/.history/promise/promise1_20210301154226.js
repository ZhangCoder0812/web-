
const STATUS = {
    PANDING: "PANDING",
    FULFILLED: "FULFILLED",
    REJECTED: "REJECTED"
}

function resolvePromise(x, promise2, resolve, reject) {
    if (x == promise2) {
        return reject(new TypeError('类型错误'))
    }
    if (typeof x === 'object' && x !== null || typeof x === 'function') {
        let called;
        try {
            let then = x.then
            if (typeof then == 'function') {
                then.call(x, y => {
                    if (called) return;
                    called = true
                    resolvePromise(x, promise2, resolve, reject)
                }, r => {
                    if (called) return;
                    called = true
                    reject(r)
                })
            } else {
                resolve(x)
            }
        } catch (e) {
            if (called) return;
            called = true
            reject(e)
        }
    } else {
        resolve(x)
    }
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
    then(onfulfilled, onrejected) {
        // 由于Promise的then可以链式调用 所以then方法返回的也因该是一个Promise实例
    
        let promise2 = new Promise((resolve, reject) => {
          if (this.status === STATUS.FULFILLED) {
            // 这里用 setTimeout包装一下是让第二个then的处理变成异步
            // 就可以拿到 promise2 ，不然拿不到 因为 new Promise 是同步的
            setTimeout(() => {
              try {
                let x = onfulfilled(this.value);
                resolvePromise(x, promise2, resolve, reject);
              } catch (e) {
                reject(e);
              }
            }, 0);
          }
          if (this.status === STATUS.REJECTED) {
            setTimeout(() => {
              try {
                let x = onrejected(this.resaon);
                resolvePromise(x, promise2, resolve, reject);
              } catch (e) {
                reject(e);
              }
            }, 0);
          }
          if (this.status === STATUS.PANDING) {
            this.onResolveCallbacks.push(() => {
              setTimeout(() => {
                try {
                  let x = onfulfilled(this.value);
                  resolvePromise(x, promise2, resolve, reject);
                } catch (e) {
                  reject(e);
                }
              }, 0);
            });
            this.onRejectCallbacks.push(() => {
              setTimeout(() => {
                try {
                  let x = onrejected(this.resaon);
                  resolvePromise(x, promise2, resolve, reject);
                } catch (e) {
                  reject(e);
                }
              }, 0);
            });
          }
        });
    
        return promise2;
      }
}

module.exports = Promise