
console.log('start')
setTimeout(() => {
    console.log('children2')
    Promise.resolve().then(() => {
        console.log('children3')
    })
}, 0)

new Promise((resolve)=>{
    console.log('children4')
    setTimeout(()=>{
        console.log('children5')
        resolve()
    })
})