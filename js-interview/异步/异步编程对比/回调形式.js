

let fs = require('fs')

fs.readFile('name.txt', 'utf-8', (err, data) => {
    console.log(data)
    fs.readFile('age.txt', 'utf-8', (err, data) => {
        console.log(data)
    })
})