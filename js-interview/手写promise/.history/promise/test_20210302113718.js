
/* 

  
*/

let fs = require('fs').promises

let getName = fs.readFile('name.txt', 'utf-8')
let getAge = fs.readFile('age.txt', 'utf-8')

Promise.all([1, getName, 2, getAge, 3]).then(data => {
    console.log(data)
})



