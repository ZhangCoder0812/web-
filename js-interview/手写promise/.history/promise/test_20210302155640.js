
/* 
 


  
*/



Promise.reject(123).finally(data => {
    console.log('f：' + data)
}).then(data => {
    console.log('s：' + data)
}, err => {
    console.log('e：' + err)
})


