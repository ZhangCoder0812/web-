

let fs = require('fs')
let it;

function ajax(url) {
    fs.readFile(url, 'utf-8', (err, data) => {
        console.log(data)
        it.next()
    })
}

function* getData() {
    yield ajax('name.txt')
    yield ajax('age.txt')
}

it = getData()

it.next()


// ------------------------- 华丽的分割线 ---------------------------

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