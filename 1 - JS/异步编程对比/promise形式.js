

let fs = require('fs')

function getData(url) {
    return new Promise(resolve => {
        fs.readFile(url, 'utf-8', (err, data) => {
            resolve(data)
        })
    })
}

getData('name.txt').then(data => {
    console.log(data)
    return getData('age.txt')
}).then(data => {
    console.log(data)
})

// ------------------------- 华丽的分割线 ---------------------------


function getData(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(time)
        }, time)
    })
}

getData(1000).then(res1 => {
    console.log(res1)
    return getData(2000)
}).then(res2 => {
    console.log(res2)
})