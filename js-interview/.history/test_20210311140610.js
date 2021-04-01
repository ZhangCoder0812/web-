
console.log('start')
setTimeout(() => { // s1
    console.log('2')
    Promise.resolve().then(() => {
        console.log('3')
    })
}, 0)

new Promise((resolve) => {
    console.log('4')
    setTimeout(() => { // s2
        console.log('5')
        resolve('6')
    }, 0)
}).then((res) => {
    console.log('7')
    setTimeout(() => { // s3
        console.log(res)
    }, 0)
})

/* 

Promise.resolve()立即执行 返回成功的Promise，
所以 console.log('3') 放到微任务队列中。
resolve('6') 在setTimeout里没有立即执行
所以 会让 new Promise 的 then 不放到微任务队列。
什么时候执行到了 resolve('6') 才放入。

start
---------> 放入宏任务队列 s1
4
---------> 放入宏任务队列 s2




start
4
2
3
5
7
6



*/