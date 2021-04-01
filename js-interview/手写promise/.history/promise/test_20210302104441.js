

/* 

 

*/

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('3')
    }, 1000)
})

Promise.resolve(p).then(data => {
    console.log(data)
})

