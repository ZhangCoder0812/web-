
//const Promise = require('./promise');


// Promise.resolve('123').then(data => {
//   console.log(data)
// })


/* 
   Promise.resolve传入的是一个Promise时
   可以等待这个Promise执行完毕
*/

let P = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(setTimeout(() => {
      new Promise((resolve, reject) => {
        console.log('plp')
      })
    }, 2000))
  }, 1000);
})

Promise.resolve(P).then(data => {
  console.log(data)
})
