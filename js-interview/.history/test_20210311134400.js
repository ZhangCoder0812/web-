
console.log('start')
setTimeout(() => {
    console.log('2')
    Promise.resolve().then(() => {
        console.log('3')
    })
}, 0)

new Promise((resolve) => {
    console.log('4')
    setTimeout(() => {
        console.log('5')
        resolve('6')
    }, 0)
}).then((res) => {
    console.log('7')
    setTimeout(() => {
        console.log(res)
    }, 0)
})

/* 

3,1
3
win

*/
var count =3 
function fn(){
    console.log(this.count)
}
var User = {
    count:1 ,
    getCount:function(fn){
        fn()
        return this.count

    }
}
console.log(User.getCount(fn))
var func = User.getCount
console.log(func(fn))
function a(){
    return ()=>{
        return ()=>{
            console.log(this)
        }
    }
}