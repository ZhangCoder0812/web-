class EventEmitter {
    constructor() {
        this.events = {};
    }
    emit(evevt,...args){

    }
    on(event,cb){
     if(!this.events[event]){
         this.events[event] = []
     }
     this.events[event].pus
    }
    once(event,cb){

    }
    off(event,cb){

    }
}

const add = (a, b) => console.log(a + b);
const log = (...args) => console.log(...args);
