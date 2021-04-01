
let p = new Promise((resolve, reject) => {
    resolve('3')
})

Promise.resolve('4').then(data => {
    console.log(data)
})