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

/* 
    - 外层的第一个then自上而下执行完才会执行外层的第二个then。
      执行到内层resolve的时候 外层的第一个then并没有执行完，而这时知道了then21必定会执行，
      所以then21先于then12执行。
      then是异步的，自上而下执行完， then21，then22 是异步的还未执行，此时then12已经知道了
      可以执行，then22只有在then21任务拿出来执行完了才会执行。
    - 并不是谁先放到队列中谁先执行，谁先知道可以被执行就执行这个，
      类似于定时器谁先到时间谁先执行，并不是定时器谁在前执行谁。
    
     promise1
     then11
     promise2
     then21
     then12
     then22
    
  */

new Promise((resolve) => {
  console.log("promise1");
  resolve();
})
  .then(() => {
    console.log("then11");
    return new Promise((resolve) => {
      // 加个return
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
/*

  return的结果是最后一个.then的返回值 并不是第一个.then结果的返回值，
  then12执行要等到外层的第一个then中promise所有的then执行完才会执行。
  因为then12成功还是失败取决于上一个then的返回结果。


  promise1
  then11
  promise2
  then21
  then22
  then12

  */
