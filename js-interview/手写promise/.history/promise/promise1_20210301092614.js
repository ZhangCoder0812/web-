
const STATUS = {
    PANDING: "",
    FULFILLED: "",
    REJECTED: ""
}

class Promise {
    constructor(executor) {
        this.status = STATUS.PANDING
        const reslove = () => {

        }
        const reject = () => [

        ]
        executor(reslove, reject)
    }
    then() {

    }
}

