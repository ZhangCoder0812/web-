
let data = []

setTimeout(() => {
    data.push(1)
}, 1000);

function getInfo() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
           
        }, 1000)
    })
}


console.log(data)