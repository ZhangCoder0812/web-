
let obj = { }

const fs = require('fs')

fs.readFile('name.txt', 'utf-8', (err, data) => {
   obj.name = data
})

fs.readFile('age.txt', 'utf-8', (err, data) => {
    console.log(data)
})