




function getData(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(time)
        }, time)
    })
}



getData().then(data => {
    console.log(data)
    return getData()
}).then(data => {
    console.log(data)
})