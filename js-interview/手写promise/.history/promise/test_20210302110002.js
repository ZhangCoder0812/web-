

/*
    1. Promise.resolve() 传入的是一个普通值 会传给 then 方法

        Promise.resolve(123).then(data => {
            console.log(data) // 123
        })

    Promise.resolve() 传入的若是一个 promise
    会等待这个 promise 执行完毕

    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(456)
        }, 1000)
    })

    Promise.resolve(p).then(data => {
        console.log(data) // 456
    })


*/









