
async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}
async function async2() {
    console.log('async2')
}
console.log('script start')
setTimeout(() => {
    console.log('setTimeout')
}, 0)
async1()
new Promise((resolve) => {
    console.log('promise1')
    resolve()
}).then(() => {
    console.log('promise2')
})
console.log('script end')

/* 
  script start
  

*/



/*
  这里重点是  await async2() ，
  await 可以理解为 Promise ， new Promise()里面执行函数
  是同步的，await之后的所有代码放入到 .then() 里面，所以
  console.log('async1 end') 就属于微任务了。
 
    await async2()
    console.log('async1 end')
    // 相当于
    new Promise(() => {
        async2()
    }).then(() => {
        console.log('async1 end')
    })

state不已经是响应式了的么 ，为什么n要用计算属性，计算属性不也响应式么。
  script start
  async1 start
  async2
  promise1
  script end
  async1 end
  promise2
  setTimeouta

*/