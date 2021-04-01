
const STATUS = {
    PANDING: "PANDING",
    FULFILLED: "FULFILLED",
    REJECTED: "REJECTED"
}

class Promise {
    constructor(executor) {
        this.status = STATUS.PANDING
        const reslove = (val) => {
            
        }
        const reject = () => [

        ]
        executor(reslove, reject)
    }
    then() {

    }
}

