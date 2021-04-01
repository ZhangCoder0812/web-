

/*
    1. Promise.resolve() 传入的是一个普通值 会传给 then 方法

            Promise.resolve(123).then(data => {
                console.log(data) // 123
            })

    2 .Promise.resolve() 传入的若是一个 promise
       会等待这个 promise 执行完毕 成功传给 then 的成功
       失败传给 then 的失败

            let p = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(456)
                }, 1000)
            })

            Promise.resolve(p).then(data => {
                console.log(data) // 456
            })

*/

/* 
 
  Promise.reject 若

*/

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(456)
    }, 1000)
})

Promise.reject(p).then(data => {
    console.log('s：' + data) // 456
}, err => {
    console.log('e：' + err) // e：456
})






