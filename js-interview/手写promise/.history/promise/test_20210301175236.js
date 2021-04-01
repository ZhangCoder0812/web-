
// const Promise = require('./promise');


// Promise.resolve('123').then(data => {
//   console.log(data)
// })



let P = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(new Promise((resolve, reject) => {
      resolve('ok')
    }))
  }, 1000);
})

/* 
   Promise.resolve传入的是一个Promise时
   可以等待这个Promise执行完毕
*/

Promise.resolve(P).then(data => {
  console.log('s：' + data)
}, err => {
  console.log('e：' + err)
})

/*
   Promise.reject传入的是一个Promise时
   不会等待这个Promise执行完毕 Promise.reject 只有 .catch


    Promise.reject(P).catch(data => {
      console.log(data)
    })

*/

