function getData(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(time)
        }, time)
    })
}

function* gen() {
    yield getData(1000)
    yield getData(2000)
}

function asyncFunction(genFn) {
    return new Promise((resolve, reject) => {
        let it = genFn()
        function _next() {
            let { value, done } = it.next()
            if (done) return;

        }
        it.next()
    })

}

asyncFunction()