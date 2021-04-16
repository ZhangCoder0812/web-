




function getData(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(time)
        }, time)
    })
}

 


getData(1000).then(data => {
    console.log(data)
    return getData()
}).then(data => {
    console.log(data)
})