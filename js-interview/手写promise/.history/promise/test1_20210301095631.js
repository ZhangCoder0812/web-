
let obj = {}

setTimeout(() => {
    obj.name = 'wade'
}, 0);

obj.age = 12

function set() {
    return new Promise(() => {
        setTimeout(() => {
            console.log(1)
        }, 1000)
    })
}


console.log(obj)