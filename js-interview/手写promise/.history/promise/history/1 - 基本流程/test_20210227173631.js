/*

 promise 在es6 规范李已经定义好了 不需要考虑兼容性李
         目前只有 ie 版本可能不支持

 作用：
       解决异步并发问题 Promise.all
       解决异步串行问题 有先后顺序的异步 回调地狱
       错误处理方便 catch方法
 
 缺陷： 依旧是基于回调函数 后面变成 generator async await

 async 就是把一个函数包装成了 Promise 底层还是 Promise 
 
 手写Promise 要基于Promise A+ 规范

*/

/*

- Promise 是一个类 类中的构造函数需要传入一个executor 默认就会执行（即new Promise 是同步的）
-  executor 中有两个参数 分别是 resolve reject
- 创建一个 Promise 默认状态是 pending 等待状态
 （ 媳妇问老公可以给我买个包么 老公不会答 媳妇一直等着 即pending，
    某一天老公有钱了说买 就会调用resolve 这时状态是 fulfilled 表示成功
    反之不买就会调用reject 这时状态是 rejected 表示失败
  ）
- pending -> fulfilled 或 pending -> rejected 
  要么成功要么失败，已经成功不能失败 已经失败不能成功  
- 调用成功和失败都要传一个成功的原因和失败的原因  
- 每一个Promise实例都有一个then方法
- new Promise 里抛出异常按失败处理
*/
let myPromise = require('./promis');
let p = new myPromise((resolve, reject) => {
  resolve('成功了');
  // reject('失败了');
  // throw new Error('');
});

p.then(
  (data) => {
    // 成功的回调 第一个参数 onfulfilled 在成功时
    console.log(data);
  },
  (fail) => {
    // 失败的回调 第二个参数 onrejected 在失败时
    console.log(fail);
  },
);
