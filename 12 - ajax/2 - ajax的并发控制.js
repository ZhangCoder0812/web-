function getData(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}

/* 

  串行：一个请求发送完 再发送另一个请求。用于两个请求有关联
      
        + promise.then 链式调用
            getData(1000).then(res1 => {
                console.log(res1)
                return getData(2000)
            }).then(res2 => {
                console.log(res2)
            })

        + async + await
            async function fn() {
                let name = await getData(1000)
                console.log(name)

                let age = await getData(2000)
                console.log(age)
            }
            fn()
      

  并行：两个请求没有关系,同时发送。
        
        + 连着写 
           let res1 = getData(1000)
           let res2 = getData(1000)
         
        + Promise.all()
            Promise.all([getData(1000),getData(1000)]).then(res=>{
               console.log(res)
            })   

        + async-pool 「 npm install async-pool 」
            可以控制并发请求的数量

    
*/

let AsyncPool = require("async-pool");

let taskList = [
  () => getData(1000),
  () => getData(2000),
  () => getData(1500),
  () => getData(2500),
  () => getData(1300),
  () => getData(1800),
];

// 第一个参数并发的数量n,每次拿前n个执行,保证每次只同时发送n个
// 第二个参数任务列表
// 第三个参数事件处理函数， task当前处理的任务，next开始处理下一轮任务
// 第四个参数 所有请求完成触发
AsyncPool(
  2,
  taskList,
  (task, next) => {
    console.log(111);
    task().then((res) => {
      console.log(res);
    });
  },
  () => {
    console.log("全部处理完了");
  }
);
