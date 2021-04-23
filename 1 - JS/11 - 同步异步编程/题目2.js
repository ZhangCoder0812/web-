
async function async1() {
    console.log('async1 start')
    await async2() 
    console.log('async1 end') 
}
async function async2() {
    console.log('async2')
}
console.log('script start')
setTimeout(function () {
    console.log('setTimeout')
}, 0)
async1()
new Promise(function (resolve) {
    console.log('promise1')
    resolve()
}).then(function () {
    console.log('promise2')
})
console.log('script end')

/* 

  await 紧跟着的代码立即执行，之后代码变成一个微任务，
  执行 await async2() 将console.log('async1 end') 放在
  webApi中，由于已经知道 await async2() 的结果是成功的，
  所以立即将console.log('async1 end')放入微任务队列，表示可以执行了，
  但是由于是异步任务 不能立即执行 排队等待执行。
  
  script start
  async1 start
  async2      
  promise1    
  script end  
  async1 end  
  promise2
  setTimeout
   
*/