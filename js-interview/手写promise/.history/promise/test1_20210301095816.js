
let data = []

setTimeout(() => {
    data.push(1)
}, 1000);

function getInfo() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
           data.push(1)
           reslove(data)
        }, 1000)
    })
}
getInfo().l

console.log(data)