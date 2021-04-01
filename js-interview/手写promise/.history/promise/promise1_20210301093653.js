
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
        const reslove = (val) => {
            if (this.status === STATUS.PANDING) {
                this.value = val
            }
        }
        const reject = (reason) => {
            if (this.status === STATUS.PANDING) {
                this.reason = reason
            }
        }
        executor(reslove, reject)
    }
    then(onFulfilled, onRejected) {
          
    }
}

