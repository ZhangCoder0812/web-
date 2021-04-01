// const Promise = require('./promise');


Promise.resolve('123').then(data => {
  console.log(data)
})

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 1000);
})

p.then(data=>console.log(data))