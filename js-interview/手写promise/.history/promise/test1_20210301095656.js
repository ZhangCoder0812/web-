
let obj = {}


function set() {
    return new Promise((reslove,reject) => {
        setTimeout(() => {
            console.log(1)
        }, 1000)
    })
}


console.log(obj)