
/* 
 
 Promise.prototype.finally 无论

  
*/



Promise.resolve(123).finally(() => {
    console.log('finally')
}).then(data => {
    console.log('s：' + data)
}, err => {
    console.log('e：' + err)
})


