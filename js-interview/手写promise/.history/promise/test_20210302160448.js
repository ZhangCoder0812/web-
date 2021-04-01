
/* 
 
 Promise.prototype.finally 无论成功promise 成功还是失败都会执行
 finally返回的是一个 promise 
 
    Promise.resolve(123).finally(() => {
        console.log('finally') 
    }).then(data => {
        console.log('s：' + data)
    }, err => {
        console.log('e：' + err)
    })

  
*/



Promise.reject(123).finally(() => {
    console.log('finally')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ok')
        }, 1000)
    })
}).then(data => {
    console.log('s：' + data)
}, err => {
    console.log('e：' + err)
})


