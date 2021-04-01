
let obj = {}

const fs = require('fs')

function after(){
    return function(){
        
    }
}

fs.readFile('name.txt', 'utf-8', (err, data) => {
    obj.name = data
})

fs.readFile('age.txt', 'utf-8', (err, data) => {
    obj.age = data
    console.log(obj)
})