
// const Promise = require('./promise')


Promise.resolve=function(){
    return new Promise((resolve)=>{
        
    })
}
 
Promise.resolve(1).then(data => {
    console.log(data)
})
