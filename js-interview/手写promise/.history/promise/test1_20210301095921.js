
let data = []

function getInfo() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            data.push(1)
            reslove(data)
        }, 1000)
    })
}

getInfo().then(data => {
    console.log(data)
})

console.log(111111111111)