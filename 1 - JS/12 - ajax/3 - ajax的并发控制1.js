function getData(time) {
  return new Promise((resolve, reject) => {
    if (time === 3) reject(time)
    setTimeout(() => resolve(time), time * 1000)
  })
}


/* 

  方案1: 限制并发数量limit，限制多少个 就创建多少个工作区，每个工作区都在发送请求，
         如果某个工作区中请求全部完成，就从任务列表中继续拿去下一个任务执行。

    taskList：总任务列表 为一个数组 数组中每一项都是个函数 返回的是一个Promise实例
    limit：并发限制数量 默认为2 一般建议小于5个 

*/


const taskList = [
  () => getData(1),
  () => getData(4),
  () => getData(2),
  800,
  () => getData(3),
  () => getData(5),
]

function limitRequest(limit = 2, taskList = []) {
  limit = +limit
  if (isNaN(limit)) throw new TypeError('limit must be an  number');
  if (!Array.isArray(taskList)) throw new TypeError('tasklist must be Array');
  if (!taskList.length) return;
  let result = [],
    index = 0,
    workSpaces = Array.from({ length: limit }).fill(null);// limit为几 就创建多少个工作区
  // 把每个工作区变为promise 当这个工作区没有要处理的任务了 就让实例成功 表示这个工作区处理完成了
  workSpaces = workSpaces.map(() => {
    return new Promise((resolve) => {
      async function next() {
        console.log("----每次处理两个----")
        let task = taskList[index++];// 每次进来index都先加1 所以后面要减1 循环是同步的
        if (index > taskList.length) {
          resolve()
          return;
        }
        // 需要保证每个方法执行都返回一个promise实例
        if (typeof task === 'function') {
          try { // index-1 按请求先后 taskList存储顺序放置处理结果
            result[index - 1] = await task()
          } catch (e) {
            result[index - 1] = '失败' // 请求失败处理
          }
          console.log(result)
          next();
        } else { // 处理task不是函数的类型
          result[index - 1] = task
        }
      }
      next()
    })
  })
  // 当所有的工作区都处理完了 就表示所有的任务都处理完了
  return Promise.all(workSpaces).then(() => result);
}

limitRequest(2, taskList).then((res) => {
  // 都处理完成触发 res处理结果 顺序和taskList中顺序一致
  console.log("结果：", res);
});