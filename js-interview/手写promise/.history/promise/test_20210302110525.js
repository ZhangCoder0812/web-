

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
 
  1. Promise.reject 若传入的是一个 promise 不会等待 promise
     执行完毕 ， 因为一旦失败就失败了 不管传的 promise 是否成功失败
     直接将这个参数 promise 
*/

let p = new Promise((resolve, reject) => {
    resolve(456)
})

Promise.reject(p).then(data => {
    console.log('s：' + data) // 456
}, err => {
    console.log('e：' + err) // e：456
}).catch(err => {
    console.log(err)
})






