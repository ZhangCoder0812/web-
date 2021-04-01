
let obj = {}

setTimeout(() => {
    
}, 1000);

obj.name = 'wade'
obj.age = 12

function set() {
    return new Promise(() => {
        setTimeout(() => {
            console.log(1)
        }, 1000)
    })
}


console.log(obj)