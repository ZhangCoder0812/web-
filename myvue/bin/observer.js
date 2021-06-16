import Dep from "./dep.js";

export default class Observer {
    constructor(data) {
        this.traverse(data);
    }
    // 递归遍历data中所有属性
    traverse(data) {
        if (!data || typeof data !== "object") {
            return;
        }
        Object.keys(data).forEach(key => {
            this.defineReactive(data, key, data[key]);
        });
    }
    // 给传入的数据设置 getter/setter
    defineReactive(obj, key, val) {
        // 递归遍历
        this.traverse(val);
        const that = this;
        const dep = new Dep();
        Object.defineProperty(obj, key, {
            configurable: true,
            enumerable: true,
            get() {
                Dep.target && dep.addSub(Dep.target);
                // 此时 Dep.target 就是当前这个属性的watcher
                return val;
            },
            set(newValue) {
                if (newValue === val) {
                    return;
                }
                val = newValue;
                that.traverse(newValue); // 设置新值的时候可能也是一个对象
                dep.notify();
            },
        });
    }
}
