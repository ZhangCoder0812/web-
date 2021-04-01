
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