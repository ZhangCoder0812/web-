
const STATUS = {
    PANDING: "PANDING",
    FULFILLED: "FULFILLED",
    REJECTED: "REJECTED"
}

function resolvePromise(x, promise2, resolve, reject) {
    if (x == promise2) {
        return reject(new TypeError('类型错误'))
    }
    if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
        let called;
        try {
            let then = x.then
            if (typeof then == 'function') {
                then.call(x, y => {
                    if (called) return;
                    called = true
                    resolvePromise(y, promise2, resolve, reject)
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
                this.onResolveCallbacks.forEach(fn => fn())
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

        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : data => data
        onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err }


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


Promise.defer = Promise.deferred = function () {
    let dfd = {};
    dfd.promise = new Promise((resolve, reject) => {
        dfd.resolve = resolve;
        dfd.reject = reject;
    });
    return dfd;
};


module.exports = Promise