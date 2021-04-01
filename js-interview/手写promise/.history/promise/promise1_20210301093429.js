
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
            
        }
        const reject = (reason) => [

        ]
        executor(reslove, reject)
    }
    then() {

    }
}

