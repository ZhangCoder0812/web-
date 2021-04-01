
/* 
 
 Promise.prototype.finally 无论成功promise 成功失败都会执行
 

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


