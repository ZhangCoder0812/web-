
console.log('start')
setTimeout(() => {
    console.log('2')
    Promise.resolve().then(() => {
        console.log('3')
    })
}, 0)

new Promise((resolve) => {
    console.log('4')
    setTimeout(() => {
        console.log('5')
        resolve('children5')
    }, 0)
}).then((res) => {
    console.log('children7')
    setTimeout(() => {
        console.log(res)
    }, 0)
})