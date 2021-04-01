
const STATUS = {
    PANDING: "PANDING",
    FULFILLED: "FULFILLED",
    REJECTED: "REJECTED"
}

function resolvePromise(x, promise2, resolve, reject) {
    if (x == promise2) {
        return new TypeError('类型错误')
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
    then(onFulfilled, onRejected) {
        let promise2 = new Promise((resolve, reject) => {
            if (this.status === STATUS.FULFILLED) {
                try {
                    let x = onFulfilled(this.value)
                    setTimeout(() => {
                        resolvePromise(x, promise2, resolve, reject) 
                    }, 0);
                } catch (e) {
                    reject(e)
                }
            }
            if (this.status === STATUS.REJECTED) {
                try {
                    let x = onRejected(this.reason)
                    setTimeout(() => {
                        resolvePromise(x, promise2, resolve, reject) 
                    }, 0);
                } catch (e) {
                    reject(e)
                }
            }
            if (this.status === STATUS.PANDING) {
                this.onResolveCallbacks.push(() => {
                    try {
                        let x = onFulfilled(this.value)
                        resolvePromise(x, promise2, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                })
                this.onFulfilledCallbacks.push(() => {
                    try {
                        let x = onRejected(this.reason)
                        resolvePromise(x, promise2, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                })
            }
        })
        return promise2
    }
}

module.exports = Promise