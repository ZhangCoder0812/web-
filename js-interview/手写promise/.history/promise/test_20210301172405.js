 
const Promise = require('./promise');


// Promise.resolve('123').then(data => {
//   console.log(data)
// })

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ok')
  }, 1000);
})

Promise.resolve(P).then(data => {
  console.log(data)
})
