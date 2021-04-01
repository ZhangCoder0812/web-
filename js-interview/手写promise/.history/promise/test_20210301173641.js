
const Promise = require('./promise');


// Promise.resolve('123').then(data => {
//   console.log(data)
// })


/* 
   Promise.resolve传入的是一个Promise时
   可以等待这个Promise执行完毕
*/

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ok')
  }, 1000);
}).then(data=>{
  console.log(data)
})

let P = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ok')
  }, 1000);
})

Promise.resolve(P).then(data => {
  console.log(data)
})
