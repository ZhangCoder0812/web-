
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
           this.value = val 
        }
        const reject = (reason) => {
            this.reason = reason
        }
        executor(reslove, reject)
    }
    then() {

    }
}

