


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
it.next().then(res1 => {
    console.log(res1)
}).then(res2 => {
    console.log(res2)
})