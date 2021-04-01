
let obj = {}

const fs = require('fs')

function after(times, callback) {
    return function () {
        --times === 0 && callback()
    }
}

let fn = after(2, () => {
    console.log(obj)
})

fs.readFile('name.txt', 'utf-8', (err, data) => {
    obj.name = data
    fn()
})

fs.readFile('age.txt', 'utf-8', (err, data) => {
    obj.age = data
    fn()
})