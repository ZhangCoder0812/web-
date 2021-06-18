class EventEmitter {
    constructor() {
        this.events = {};
    }
    emit(evevt,...args){

    }
    on(event,cb){
     if(!this.events[event])
    }
    once(event,cb){

    }
    off(event,cb){

    }
}

const add = (a, b) => console.log(a + b);
const log = (...args) => console.log(...args);
