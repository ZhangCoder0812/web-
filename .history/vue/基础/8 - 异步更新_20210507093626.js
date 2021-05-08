/* 

代码执行同步 dom更新异步 dom初次渲染是同步

arr:[1,2,3]
console.log(this.$refs.box.length)  // 3
this.arr.push(4)
console.log(this.$refs.box.length) // 3

为什么是异步？
  防止多次连续更新  只更新一次   提高性能  因为代码同步执行  执行完了才跟新dom


nextTick 可以获取到更新之后的结果
  

*/
