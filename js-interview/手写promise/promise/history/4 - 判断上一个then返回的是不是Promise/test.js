const Promise = require('./promise');
const fs = require('fs');
const { resolve } = require('path');

function read(...args) {
  return new Promise((resolve, reject) => {
    fs.readFile(...args, function (err, data) {
      if (err) reject(err);
      resolve(data);
    });
  });
}
let p = read('name.txt', 'utf-8');

let promise2 = p.then(
  (data) => {
    console.log('成功1:' + data);
    // throw new Error('ppp')
    // return 100;
    // return read('name1.txt', 'utf-8');
    // return promise2
    return new Promise((resolve, reject) => {
      resolve(
        new Promise((resolve, reject) => {
          resolve(
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve(1);
              });
            }, 1000),
          );
        }),
      );
    });
  },
  (err) => {
    console.log('失败1:' + err);
    //return 200;
  },
);

promise2.then(
  (data) => {
    console.log('成功2:' + data);
  },
  (err) => {
    console.log('失败2:' + err);
  },
);
