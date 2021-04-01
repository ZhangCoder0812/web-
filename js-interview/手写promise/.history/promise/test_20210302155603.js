
/* 
 


  
*/



Promise.reject(123).finally(data => {
    console.log(data)
}).then(data => {
    console.log(data)
},err=>{
    console.log(err)
})


