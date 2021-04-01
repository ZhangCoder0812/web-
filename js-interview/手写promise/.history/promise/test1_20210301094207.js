
let obj = {}

setTimeout(() => {
    obj.name = 'wade'
}, 1000);
setTimeout(() => {
    obj.name = 'wade'
}, 1000);




function set() {
    return new Promise(() => {
        setTimeout(() => {
            console.log(1)
        }, 1000)
    })
}


console.log(obj)