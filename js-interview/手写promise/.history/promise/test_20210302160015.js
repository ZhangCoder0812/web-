
/* 
 
 Promise.prototype.finally 无论成功还是失败都会执行
 传入的函数没有参数

  
*/



Promise.resolve(123).finally(() => {
    console.log('finally')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('ok')
        }, 1000)
    })
}).then(data => {
    console.log('s：' + data)
}, err => {
    console.log('e：' + err)
})


