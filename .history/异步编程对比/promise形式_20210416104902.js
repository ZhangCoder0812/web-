




function getData(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(time)
        }, time)
    })
}

getData(1000).then(res1 => {
    console.log(res1)
    return getData(2000)
}).then(res2 => {
    console.log(res2)
})