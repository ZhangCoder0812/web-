console.log("start");
let intervalId;
Promise.resolve()
  .then(() => {
    console.log("p1");
  })
  .then(() => {
    console.log("p2");
  });

setTimeout(() => {
  Promise.resolve()
    .then(() => {
      console.log("p3");
    })
    .then(() => {
      console.log("p4");
    });
  intervalId = setInterval(() => {
    console.log("interval");
  }, 3000);
  console.log("timeout1");
}, 0);

/* 
  连续点then 下一个then是否放入任务队列跟上一个then返回的promise状态有关
  p1,p2一起放入WebApi中，等p1执行完了 立即把p2放入任务队列中，再拿到主线程
  执行。
  
  start
  p1
  p2
  timeout1
  p3
  p4
  interval



*/