
/* 
 
1. Promise.prototype.finally 无论成功promise 成功还是失败都会执行
   finally返回的是一个 promise 成功走then 的成功 失败走then 的失败
 
    Promise.resolve(123).finally(() => {
        console.log('finally') 
    }).then(data => {
        console.log('s：' + data)
    }, err => {
        console.log('e：' + err)
    })

2. 若finally返回的是一个promise ，
   这个promise若成功 则走then 的成功 
   失败则走then 的失败    
  
*/



Promise.resolve(123).finally(() => {
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


