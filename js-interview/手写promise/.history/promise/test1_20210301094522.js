
let obj = {}

setTimeout(() => {
    obj.name = 'wade'
}, 0);

setTimeout(() => {
    obj.age = 12
    console.log(obj)
}, 0);

function set() {
    return new Promise(() => {
        setTimeout(() => {
            console.log(1)
        }, 1000)
    })
}


