function getData(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(time)
        }, time)
    })
}



function asyncFunction(genFn) {
    return new Promise((resolve, reject) => {
        let it = genFn()
        function _next() {
            let { value, done } = it.next()
            if (done) return;
            _next()
        }
        it.next()
    })

}

function* gen() {
   let res1 =  yield getData(1000)
   console.log(res1)
    yield getData(2000)
}

asyncFunction(gen).then(res => {
    console.log(res)
}, err => {
    console.log(err)
})