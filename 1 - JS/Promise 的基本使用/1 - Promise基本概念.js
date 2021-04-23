/* 
 
  Promise: es6中的一个新增的类，用来管控异步编程的类 ，承诺模式。
           Promise本身不是异步的， new Promise 同步立即执行， then方法才是异步的。
           
  let p = new Promise(exector) 
      - 必须要传值 且必须是个函数 exector执行器 new的时候这个函数立即执行 ， 
        所以 new Promise() 是同步的
      - exector 里面有两个参数 resolve/reject ，
          执行resolve 将Promise状态变成  fulfilled 成功态
          执行reject 将Promise状态变成  rejected 失败态
      - p是Promise的一个实例   
        + [[PromiseState]] Promise实例状态，[[]]内置属性 js自己玩的 我们拿不到
           有三种状态： pending 等待状态 / fulfilled 成功状态 / rejected 失败状态  
           只能 pending -> fulfilled/rejected , 状态一旦改变不能再次修改
          [[PromiseResult]] 实例的值
        + 公共方法和属性 在Promise.prototype
           then
           catch
           finally
           Symbol[Symbol.toStringTag]:'Promise'    
      - 修改Promise状态有两种方式
        + 执行 resolve/reject
        + exector内部代码报错
      - 实例的状态改变，会触发then方法中的成功/失败回调 拿到Promise实例的执行结果。
        then有两个参数 分别是 onfulfilled成功回调 / onrejected失败回调 
        then方法返回结果也是一个全新的Promise实例

*/
let p1 = new Promise((resolve, reject) => {
  resolve("ok"); // 同步改变Promise实例的状态和结果
                 // 通知之前基于then存放的回调方法执行 
  // reject("error");
});

p1.then(
  (res) => {
    console.log(res); // ok
  },
  (error) => {
    console.log(error);
  }
);

console.log(p1); // Promise { 'ok' }
