
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

2. 若finally返回的是一个promise ，无论这个promise成功还是失败 都有等待效果
   这个promise若成功 则走then 的成功 值是Promise.resolve(123).finally传的值
   失败则走then 的失败 值是finally内部返回的promise执行的结果   
  
*/


Promise.prototype.finally = function (callback) {

    return this.then(data => {
        return Promise.resolve(callback()).then(() => data)
    }, err => {
        return Promise.resolve(callback()).then(() => { throw err })
    })

}

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


