
/* 

   Promise.all 参数是一个数组 里面
  
*/

let fs = require('fs').promises //  promises 可以将函数包装成 promise 

let getName = fs.readFile('name.txt', 'utf-8')
let getAge = fs.readFile('age.txt', 'utf-8')

Promise.all([1, getName, 2, getAge, 3]).then(data => {
    console.log(data)
})



