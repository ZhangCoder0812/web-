
let p = new Promise((resolve, reject) => {
    resolve('3')
})

Promise.resolve(p).then(data => {
    console.log(data)
})