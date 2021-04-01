
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
        resolve('6')
    }, 0)
}).then((res) => {
    console.log('7')
    setTimeout(() => {
        console.log(res)
    }, 0)
})

/* 

Promise.resolve()立即执行 返回成功的Promise，
所以 console.log('3') 放到微任务队列中。
resolve('6') 在setTimeout里没有立即执行
所以 会让 new Promise


start
4
2
3
5
7
6



*/