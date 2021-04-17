/*

  发布订阅模式： Publish & Subscribe 
      灵感来源于：DOM二级事件绑定 addEventListener
      + 给当前元素绑定一个事件行为，绑定多个不同的方法「事件池机制」
      + 事件行为触发 会依次通知事件池中的方法执行
      + 自定义事件处理的一种方案

  类似于中介arr，卖房者把房源信息放到中介on，买房者
  去中介看房子emit 。卖房者和买房者没有联系 通过中介。     

  发布订阅： on订阅 emit发布
      arr缓存订阅的事件，发布时取出来一个个执行
      没有 发布者 订阅者 的概念
      
*/

const fs = require("fs");
let obj = {};

let eventObj = {
  arr: [],
  on(fn) {
    // 订阅
    this.arr.push(fn);
  },
  emit() {
    // 发布
    this.arr.forEach((fn) => {
      if (typeof fn === "function") {
        fn();
      }
    });
  },
};

// 被动 读取完成强制触发 我们才收到消息
eventObj.on(() => {
  if (Object.keys(obj).length == 2) {
    console.log("数据读取完毕", obj);
  }
});

fs.readFile("name.txt", "utf8", function (err, data) {
  obj.name = data;
  eventObj.emit();
});

fs.readFile("age.txt", "utf8", function (err, data) {
  obj.age = data;
  eventObj.emit();
});
