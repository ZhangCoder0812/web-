


function getData(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(time)
        }, time)
    })
}

function* gen(){
    yield getData(1000)
}