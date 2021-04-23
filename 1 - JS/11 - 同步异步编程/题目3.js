let body = document.querySelector("body");

body.addEventListener("click", function () {
  Promise.resolve().then(() => {
    console.log(1);
  });
  console.log(2);
});
body.addEventListener("click", function () {
  Promise.resolve().then(() => {
    console.log(3);
  });
  console.log(4);
});

/* 

  事件绑定是宏任务


  2
  1
  4
  3

*/