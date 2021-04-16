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
        function _next(x) { // x 上一个
            let { value, done } = it.next(x)
            if (done) {
                resolve('ok')
                return;
            }
            value.then(res => _next(res), err => reject(err))
        }
        _next()
    })
}

function* gen() {
    let res1 = yield getData(1000)
    console.log(res1)
    let res2 = yield getData(2000)
    console.log(res2)
    let res3 = yield getData(3000)
    console.log(res3)
}

asyncFunction(gen).then(res => {
    console.log('都成功了--------', res)
}, err => {
    console.log('失败了--------', err)
})