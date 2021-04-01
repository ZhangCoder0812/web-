
/* 
 
 Promise.prototype.finally 无论成功还是失败都会执行
 传入的函数没有参数

    Promise.reject(123).finally(() => {
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


