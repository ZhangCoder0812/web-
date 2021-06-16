

let fs = require('fs')

function getData(url) {
    return new Promise(resolve => {
        fs.readFile(url, 'utf-8', (err, data) => {
            resolve(data)
        })
    })
}

async function fn() {
    let name = await getData('name.txt')
    console.log(name)

    let age = await getData('age.txt')
    console.log(age)
}
fn()

// ------------------------- 华丽的分割线 ---------------------------

function getData(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(time)
        }, time)
    })
}


async function fn() {
    let name = await getData(1000)
    console.log(name)

    let age = await getData(2000)
    console.log(age)
}
fn()