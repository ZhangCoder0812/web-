

/* 
    Promise.resolve() 传入的若是一个 promise 
    会等待这个 promise 执行完毕

    let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('3')
    }, 1000)
})

Promise.resolve(p).then(data => {
    console.log(data)
})


*/









