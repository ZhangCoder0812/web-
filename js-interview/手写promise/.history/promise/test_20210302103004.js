
// const Promise = require('./promise')


Promise.resolve = function (x) {
    return new Promise((resolve) => {
        resolve(x)
    })
}

let p  = new Promise((resolve)=>{
    
})

Promise.resolve(1).then(data => {
    console.log(data)
})
