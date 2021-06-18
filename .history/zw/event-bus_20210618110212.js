class EventEmitter {
    constructor() {
        this.events = {};
    }
    emit(evevt, ...args) {}
    on(event, cb) {
        if (!this.events[event]) {
            this.events[event] = []; // 同一事件的监听不只一个
        }
        this.events[event].push(cb);
    }
    once(event, cb) {}
    off(event, cb) {
        if (!cb) {
            // 不传 移除所有监听
            this.events[event] = null;
        }
    }
}

const add = (a, b) => console.log(a + b);
const log = (...args) => console.log(...args);
