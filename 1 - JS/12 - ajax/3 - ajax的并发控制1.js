function getData(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time === 1600) reject(time);
      resolve(time);
    }, time);
  });
}

let taskList = [
  () => getData(1000),
  () => getData(1200),
  () => getData(1400),
  () => getData(1600),
  () => getData(1800),
  () => getData(2000),
];

/* 

  方案1: 限制并发数量limit，限制多少个 就创建多少个工作区，每个工作区都在发送请求，
         如果某个工作区中请求全部完成，就从任务列表中继续拿去下一个任务执行。

    taskList：总任务列表 为一个数组 数组中每一项都是个函数 返回的是一个Promise实例
    limit：并发限制数量 默认为2 一般建议小于5个 

*/

const createRequest = function (taskList, limit) {
  if (typeof limit !== "number") limit = 2;
  if (!Array.isArray(taskList)) throw new TypeError("taskList must be Array");
  let result = [],
    index = 0,
    workSpaces = new Array(limit).fill(null); // limit为几 就创建多少个工作区
  // 把每个工作区变为promise 当这个工作区没有要处理的任务了 就让实例成功 表示这个工作区处理完成了
  workSpaces = workSpaces.map(() => {
    return new Promise((resolve) => {
      const next = async function () {
        console.log("----每次处理两个----");
        let prevIndex = index,
          task = taskList[index++],
          temp;
        if (index > taskList.length - 1) {
          resolve(); // 执行resolve就表示当前promise成功了 下面promis.all才会有结果
          return; // 要结束掉 不然下面代码会多执行limit次
        }
        if (typeof task === "function") {
          // 需要保证每个方法执行都返回一个promise实例
          try {
            temp = await task();
            result[prevIndex] = temp; // 按照taskList存储顺序放置处理结果
          } catch (e) {
            // 处理失败存储null
            result[prevIndex] = null;
          }
          console.log(result);
          next();
        }
      };
      next();
    });
  });
  // 当所有的工作区都处理完了 就表示所有的任务都处理完了
  return Promise.all(workSpaces).then(() => result);
};

createRequest(taskList, 2).then((res) => {
  // 都处理完成触发 res处理结果 顺序和taskList中顺序一致
  console.log("结果：", res);
});
