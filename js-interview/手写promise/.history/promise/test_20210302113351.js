
// promises 可以将函数包装成 promise
let fs = require('fs').promises

let getName = fs.readFile('name.txt','utf-8')
let getAge = fs.readFile('age.txt','utf-8')

Promise.all([1,getName,])



