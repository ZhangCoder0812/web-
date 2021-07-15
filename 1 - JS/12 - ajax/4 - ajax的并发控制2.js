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

  方案2: 依次把所有的任务放到队列中执行，只有当前处理的任务数量小于limit时
        才执行下一个任务。

*/
class TaskQueue {
    constructor(taskList, limit, callback) {
        this.taskList = taskList;
        this.limit = limit;
        this.callback = callback;
        this.queue = []; // 任务队列
        this.result = []; // 总结果
        this.running = 0; // 正在运行的任务数量
        this.index = 0;
    }
    pushStack(task) {
        // 把任务依次放到队列中
        this.queue.push(task);
        this.next(); // 必须放在这里执行next 才能达到并发的效果，防止await阻止代码执行
    }
    async next() {
        // 执行next 按照队列中顺序把任务执行
        if (this.running < this.limit && this.index <= this.taskList.length) {
            this.running++;
            let prevIndex = this.index,
                task = this.queue[this.index++],
                temp;
            if (typeof task === "function") {
                try {
                    temp = await task();
                    this.result[prevIndex] = temp;
                } catch (e) {
                    this.result[prevIndex] = null;
                }
            }
            this.running--;
            // 终止条件必须放在 this.running-- 下面判断 放在上面this.running++ 后始终不会等于0
            if (this.running === 0 && this.index >= this.taskList.length) {
                return this.callback(this.result);
            }
            this.next();
        }
    }
}
const createRequest = function (taskList, limit, callback) {
    if (!Array.isArray(taskList)) throw new TypeError("taskList must be Array");
    // limit可能没传 默认为2
    if (typeof limit === "function") {
        callback = limit;
        limit = 2;
    }
    if (typeof callback !== "function") callback = Function.prototype;
    let tq = new TaskQueue(taskList, limit, callback);
    taskList.forEach(task => {
        tq.pushStack(task);
    });
    // tq.next() 不能在这里执行next 达不到并发的效果 await会阻止代码执行
};

createRequest(taskList, res => {
    // 都处理完成触发 res处理结果 顺序和taskList中顺序一致
    console.log("结果：", res);
});
