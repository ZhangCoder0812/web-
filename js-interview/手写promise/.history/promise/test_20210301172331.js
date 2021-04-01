const { resolve } = require('./promise');
const Promise = require('./promise');


Promise.resolve('123').then(data => {
  console.log(data)
})

let p = new Promise((resolve,reject)=>{
  
})