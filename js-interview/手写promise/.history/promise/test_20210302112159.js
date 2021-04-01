

 
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(456)
    }, 1000)
})

Promise.reject(p).catch(err => {
    console.log(err) // Promise { <pending> }
})






