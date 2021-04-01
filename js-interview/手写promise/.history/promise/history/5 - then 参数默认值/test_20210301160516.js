 
const Promise = require('./promise');

new Promise((resolve, reject) => {
  resolve('ok');
})
  .then()
  .then()
  .then()
  .then((data) => {
    console.log(data);
  });

new Promise((resolve, reject) => {
  reject('ok');
})
  .then()
  .then()
  .then()
  .then(
    (data) => {},
    (err) => {
      console.log(err);
    },
  );
