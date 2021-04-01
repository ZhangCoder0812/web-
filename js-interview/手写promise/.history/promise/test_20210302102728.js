
// const Promise = require('./promise')


Promise.resolve=function(){
    return new Promise(()=>{
        
    })
}
 
Promise.resolve(1).then(data => {
    console.log(data)
})
