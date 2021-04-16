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

let it = gen()
it.next().value.then(res1 => {
    console.log(res1)
    it.next(2000).value.then(res2 => {
        console.log(res2)
    })
})

function asyncFunction(genFn){
    return new Promise((resolve))

}