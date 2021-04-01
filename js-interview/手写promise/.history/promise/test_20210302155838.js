
/* 
 
 Promise.prototype.finally 无论成功还是失败都会执行


  
*/



Promise.resolve(123).finally(() => {
    console.log('finally')
}).then(data => {
    console.log('s：' + data)
}, err => {
    console.log('e：' + err)
})


