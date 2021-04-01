
/* 
 


  
*/



Promise.resolve(123).finally(data => {
    console.log('f：' )
}).then(data => {
    console.log('s：' + data)
}, err => {
    console.log('e：' + err)
})


