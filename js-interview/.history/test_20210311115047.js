
console.log('start')
setTimeout(() => {
    console.log('children2')
    Promise.resolve().then(() => {
        console.log('children3')
    })
}, 0)

new Promise((resolve))