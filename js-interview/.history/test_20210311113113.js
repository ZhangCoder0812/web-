
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
  这里重点是  await async2() ，
  await 可以理解为 Promise ， new Promise()里面执行函数
  是同步的，await之后的代码放入到 .then() 里面，所以

  script start
  async1 start
  async2
  promise1
  script end
  async1 end
  promise2
  setTimeouta

*/