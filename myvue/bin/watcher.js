import Dep from "./dep.js";

export default class Watcher {
    // vm vue实例
    // key data中的属性名
    // cb 负责更新视图的回调函数
    constructor(vm, key, cb) {
        this.vm = vm;
        this.key = key;
        this.cb = cb;
        Dep.target = this;
        // 老值 这里会触发get方法 在get方法里会去做一些操作？
        this.oldValue = vm[key];// 这里此时的oldValue都是初始化时候的老值 因为这里就渲染一次 真实的vue不会
        Dep.target = null;
    }
    // 当数据变化的时候更新视图
    update() {
        let newVal = this.vm[this.key];
        if (this.oldValue === this.newVal) {
            return;
        }
        this.cb(newVal);
    }
}

/* 

 1. watcher初始化获取oldValue的时候 会去做一些什么操作？
    
    添加依赖的操作   

 2. 通过 vm[key] 获取oldValue 为什么要将当前实例挂在Dep上？ 获取完之后为什么又置为null了？

    因为在getter方法里面需要给属性收集依赖，依赖收集就是收集watcher，需要将当前的watcher暂存一下
    用完之后就可以置为null了。

 3. update 方法在什么时候执行？  

    在 dep.notify 里面执行

*/