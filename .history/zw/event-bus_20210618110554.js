class EventEmitter {
    constructor() {
        this.events = {};
    }
    emit(evevt, ...args) {
        const
    }
    on(event, cb) {
        if (!this.events[event]) {
            this.events[event] = []; // 同一事件的监听不只一个
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
const evevt = new EventEmitter();
