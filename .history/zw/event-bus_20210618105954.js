class EventEmitter {
    constructor() {
        this.events = {};
    }
}

const add = (a, b) => console.log(a + b);
const log = (...args) => console.log(...args);
