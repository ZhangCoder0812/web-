


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