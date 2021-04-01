
let obj = {}

const fs = require('fs')

function after(times, fn) {
    return function () {
        --times===0 && fn()
    }
}

let fn = after(2)

fs.readFile('name.txt', 'utf-8', (err, data) => {
    obj.name = data
    fn()
})

fs.readFile('age.txt', 'utf-8', (err, data) => {
    obj.age = data
    fn()
})