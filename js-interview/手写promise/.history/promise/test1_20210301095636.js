
let obj = {}

setTimeout(() => {
    obj.name = 'wade'
}, 0);

setTimeout(() => {
   
}, 0);

function set() {
    return new Promise(() => {
        setTimeout(() => {
            console.log(1)
        }, 1000)
    })
}


console.log(obj)