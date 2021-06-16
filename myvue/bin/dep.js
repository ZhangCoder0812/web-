/* 
 
  发布订阅模式
  存储所有观察者 watcher
  每个watcger都有一个uodate
  通知subs里的每个watcher实例 触发update方法

*/

export default class Dep {
    constructor() {
        // 存储所有的观察者
        this.subs = [];
    }
    // 添加观察者
    addSub(watcher) {
        if (watcher && watcher.update) {
            this.subs.push(watcher);
        }
    }
    // 发送通知
    notify() {
        this.subs.forEach(watcher => {
            watcher.update();
        });
    }
}

/* 

 1. Dep 在哪里实例化？在哪里addSub？
    
    在Observer中遍历各个属性的时候实例化
    在getter的时候搜集依赖 即 addsub

 2.  Dep notify 在哪里调用   
     
     在setter的时候派发更新 即 dep.notify

*/

