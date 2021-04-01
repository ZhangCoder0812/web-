
const STATUS = {
    PANDING: "PANDING",
    FULFILLED: "FULFILLED",
    REJECTED: "REJECTED"
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
                    resolve(x)
                } catch (e) {
                    reject(e)
                }
            }
            if (this.status === STATUS.REJECTED) {
                
                try {
                    let x = onRejected(this.value)
                    resolve(x)
                } catch (e) {
                    reject(e)
                }
            }
            if (this.status === STATUS.PANDING) {
                this.onResolveCallbacks.push(() => {
                    let x = onFulfilled(this.value)
                    resolve(x)
                })
                this.onFulfilledCallbacks.push(() => {
                    let x = onRejected(this.value)
                    resolve(x)
                })
            }
        })

        return promise2
    }
}

module.exports = Promise