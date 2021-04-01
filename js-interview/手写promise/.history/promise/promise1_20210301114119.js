
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

        })

        if (this.status === STATUS.FULFILLED) {
            onFulfilled(this.value)
        }
        if (this.status === STATUS.REJECTED) {
            onRejected(this.reason)
        }
        if (this.status === STATUS.PANDING) {
            this.onResolveCallbacks.push(() => {
                onFulfilled(this.value)
            })
            this.onFulfilledCallbacks.push(() => {
                onRejected(this.value)
            })
        }
        return promise2
    }
}

module.exports = Promise