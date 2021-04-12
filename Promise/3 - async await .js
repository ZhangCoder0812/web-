/* 
 
    ES7：generator + promise 的语法糖：async + await 

    async 函数修饰符，让函数返回 promise

*/

async function fn() {
  // return 10;
  // return Promise.resolve(10); // 也可以自己返回一个promise
  try {
    console.log(a); // 捕获了异常 catch捕获到 res结果是成功态
    // return Promise.reject(10); 只是一个promise的失败态 不是异常 catch捕获不到
  } catch (e) {
    console.log(e);
  }
}

let res = fn();

console.log(res);
/* 
    [[PromiseState]]: "fulfilled"
    [[PromiseResult]]: 10
*/

res.then(
  (data) => {
    console.log(data); // 10 async函数的执行结果是promise 可以.then拿到结果
  },
  (err) => {
    console.log("err:", err);
  }
);
