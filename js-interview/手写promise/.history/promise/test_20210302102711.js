
// const Promise = require('./promise')


Promise.resolve=function(){
    return 2
}
 
Promise.resolve(1).then(data => {
    console.log(data)
})
