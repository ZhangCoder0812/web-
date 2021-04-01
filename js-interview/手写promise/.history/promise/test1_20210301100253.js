

const fs = require('fs')

fs.readFile('name.txt', 'utf-8', data => {
    console.log(data)
})