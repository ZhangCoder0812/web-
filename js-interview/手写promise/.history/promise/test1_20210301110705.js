let Promise = require('./promise1');
let p = new Promise((resolve, reject) => {
    //resolve('成功了');
     reject('失败了');
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
