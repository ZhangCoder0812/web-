/* 


 稀疏数组 密集数组

 fn1.call.call.call(fn2)

 Symbol.toStringTag，Array ，Object，Math

 继承 寄生组合继承 修父类属性和方法

 获取样式刷新渲染队列 轮博图

 resolve通知存的方法执行 then方法再后写的

 为什么await 后面promise失败 下面代码就不执行了

 为什么 console.log(1) 先于resovle(1) 输出 

 同步异步编程 -> 题目7

 await 的实现 asyncFunction 62

 同时发生

 async-pool

 并发控制方案1

 transformRequest

 axios失败是哪个层面的 axios封装 请求地址不存在/端口不存在/断网 

 fetch封装成功回调 result结果没有status statusText

 new Promise((resolve) => {
  console.log("promise1");
  resolve();
})
  .then(() => {
    console.log("then11");
    new Promise((resolve) => {
      console.log("promise2");
      resolve();
    })
      .then(() => {
        console.log("then21");
      })
      .then(() => {
        console.log("then22");
      });
  })
  .then(() => {
    console.log("then12");
  });

  new Promise((resolve) => {
  console.log("promise1");
  resolve();
})
  .then(() => {
    console.log("then11");
    new Promise((resolve) => {
      console.log("promise2");
      resolve();
    })
      .then(() => {
        console.log("then21");
      })
      .then(() => {
        console.log("then22");
      });
  })
  .then(() => {
    console.log("then12");
  }).then(()=>{
    console.log('-----')
  })

*/
