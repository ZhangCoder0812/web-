
let obj = {}

setTimeout(() => {
    console.log('---------')
    obj.name = 'wade'
}, 1000);

setTimeout(() => { 
    obj.age = 12
}, 1000);

function set() {
    return new Promise(() => {
        setTimeout(() => {
            console.log(1)
        }, 1000)
    })
}


console.log(obj)