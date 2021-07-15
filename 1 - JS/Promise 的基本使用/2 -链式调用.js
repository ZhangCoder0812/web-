/* 
 
  then有两个参数 分别是 onfulfilled成功回调 / onrejected失败回调 
        then方法返回结果也是一个全新的Promise实例


*/

let p1 = new Promise((resolve, reject) => {
  resolve("ok");
});

let p2 = p1.then(
  (res) => {
    console.log(res);
  },
  (error) => {
    console.log(error);
  }
);

console.log(p2);

/* 不展开看到的状态是 pending ，展开看到的状态是 fulfilled
     不展开看到的结果是代码执行到这一行立即显示的结果
     展开后看到的结果不一样是因为中途改变来结果，看到的是最终的结果
  
  Promise {<pending>}
    __proto__: Promise
    [[PromiseState]]: "fulfilled"
    [[PromiseResult]]: undefined

  p2状态改变的原因：
     - p1中的then方法只要执行不报错 p2的状态就是fulfilled 报错就是 rejected
     - p1中的then方法若返回一个新的Promise 则p2的状态就是这个Promise的结果
     - p2的结果是p1then方法中的返回值  
  
*/

new Promise((resolve, reject) => {
  // resolve("ok");
  reject("error");
})
  .then(null, null)
  .then(
    (res) => {
      console.log(res);
      /* ok 
         若上一个Promise 成功 但then成功的回调没有传但是Promise内部会默认 res=>res ,
         '顺延/穿透'到下一个then应该执行的回调函数
      */
    },
    (error) => {
      console.log("p2:" + error);
      /* ok 
           若上一个Promise 失败 但then失败的回调没有传但是Promise内部会默认 err=>Promise.reject(err),
           '顺延/穿透'到下一个then应该执行的回调函数
      */
    }
  );

new Promise((resolve, reject) => {
  reject("error");
})

  .then((res) => {
    console.log(res);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
    /* 
     
     catch 就是then方法中去掉成功的回调，
     项目中链式写法then中只写成功的回调 最后再写catch 可以统一捕获到失败。
     不管哪一步失败最后的catch都可以捕获到。
     若之前then失败且写了失败的回调 则不会被catch捕获到。

    */
  });

