
/* 

   Promise.all 参数是一个数组 里面可以是promise 可以不是
   并发执行，结果按照参数顺序输出
   
  
*/

let fs = require('fs').promises //  promises 可以将函数包装成 promise 

let getName = fs.readFile('name.txt', 'utf-8')
let getAge = fs.readFile('age.txt', 'utf-8')

Promise.all([1, getName, 2, getAge, 3]).then(data => {
    console.log(data)
})



