




function getData(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(time)
        }, time)
    })
}




getData(1000).then(data => {
    console.log(data)
    return getData(2000)
}).then(data => {
    console.log(data)
})