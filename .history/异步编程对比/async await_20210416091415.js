

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