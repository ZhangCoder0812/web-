// readFile 相对于根目录

/*

 1. 回调地域(恶魔金字塔)：有先后顺序的异步请求，只能嵌套
        fs.readFile('name.txt', 'utf8', function (err, data) {
          console.log(data);
          fs.readFile('name.txt', 'utf8', function (err, data) {
            console.log(data);
          }); 
        });
  
 2. 解决：使用promise 封装
      function read(...args) {
        return new Promise((resolve, reject) => {
          fs.readFile(...args, function (err, data) {
            if (err) reject(err);
            resolve(data);
          });
        });
      }

      read('name.txt', 'utf-8').then(
        (data) => {
          console.log('成功1:' + data);
        },
        (err) => {
          console.log('失败1:' + err);
        },
      )
  
 3. promise 链式调用：
      - 无论上一个 then 成功还是失败都会走到下一个 then 的成功里去
      - 如果上一个then方法中参数(成功/失败)有return且返回的不是一个 Promise ，
        就会将这个值传到下一个then的成功里去。
      - 如果then方法执行中出错里(抛出异常)，会走到下一个then的失败中   
      - 如果返回的是一个 Promise 会将这个Promise的结果传到下一个 then 中
  
  4. 总结： 走到下一个 then 的失败情况
         1.上一个 then(成功/失败) 执行时出错会走到下一个 then 的失败
         2.上一个 then(成功/失败) 返回的 Promise 失败。

  5.  - catch 和 PromiseA+ 规范关系表不大 ，当then失败且then中没有传失败
      的回调的时候就会走到catch。相当于then 只是没有成功的回调
      .then(data=>{

      }).catch(err=>{

      }) 
  6. then 方法为什么可以链式调用？
     - 每次调用then方法都返回一个新的 Promise ， 因为 Promise 状态
       不能改变。链式调用每次Promise状态可能不一样。    

  7. 执行10个then 如果其中一个出错没有处理，就会报错
     处理了就会接着周剩下的then，如果返回一个既不成功也不失败
     的Promise就会卡住 不往下走。     

*/

const Promise = require('./promise');
const fs = require('fs');

function read(...args) {
  return new Promise((resolve, reject) => {
    fs.readFile(...args, function (err, data) {
      if (err) reject(err);
      resolve(data);
    });
  });
}

read('name.txt', 'utf-8')
  .then(
    (data) => {
      console.log('成功1:' + data);
      // throw new Error('ppp')
      // return 100;
      // return read('name1.txt', 'utf-8');
    },
    (err) => {
      console.log('失败1:' + err);
      //return 200;
    },
  )
  .then(
    (data) => {
      console.log('成功2:' + data);
    },
    (err) => {
      console.log('失败2:' + err);
    },
  );
