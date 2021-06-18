class EventEmitter {
    constructor(maxListeners) {
        this.events = {};
        this.maxListeners = maxListeners || Infinity; // 可以监听事件的最大数量
    }
    emit(event, ...args) {
        const cbs = this.events[event];
        if (!cbs) {
            console.log("没有这事件");
            return this;
        }
        cbs.forEach(cb => cb.apply(this, args));
        return this;
    }
    on(event, cb) {
        if (!this.events[event]) {
            this.events[event] = []; // 同一事件的监听不只一个
        }
        // 最大监听数
        if(this.maxListeners!==Infinity && this.events[event].length>=this.maxListeners){
  console.warn(`当前事件超过最大监听数`)
        } 
        this.events[event].push(cb);
        return this; // 为了链式调用
    }
    once(event, cb) {
        const func = (...args) => {
            this.off(event, func);
            cb.apply(this, args);
        };
        this.on(event, func);
        return this;
    }
    off(event, cb) {
        if (!cb) {
            // 不传 移除所有监听
            this.events[event] = null;
        } else {
            this.events[event] = this.events[event].filter(item => item !== cb);
        }
        return this; // 为了链式调用
    }
}

const add = (a, b) => console.log(a + b);
const log = (...args) => console.log(...args);
const event = new EventEmitter();

event.on("add", add);
event.on("log", log);
event.emit("add", 1, 2); // 3
event.emit("log", "hi~~"); // hi~~
event.off("add");
event.emit("add", 1, 2); // 没有这事件
event.once("once", add);
event.once("once", 1, 2);
event.once("once", 1, 2);
event.once("once", 1, 2);
