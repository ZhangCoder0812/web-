/* 


 稀疏数组 密集数组

 fn1.call.call.call(fn2)

 Symbol.toStringTag，Array ，Object，Math

 继承 寄生组合继承 修父类属性和方法

 获取样式刷新渲染队列 轮博图

 resolve通知存的方法执行 then方法再后写的

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