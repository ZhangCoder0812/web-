/*

 函数式编程：
    函数式编程是编程范式中的一种，是一种典型的编程思想和方法。
    其他的编程范式还包括 面向对象编程，命令式编程 等。

*/

// // 命令式编程，通过调用 const 和 console.log 进行赋值和输出。
// const a = 'hello';
// const b = 'world';
// console.log(a + b);


// // 面向对象编程
// class Code {
//     constructor() {
//         this.a = 'hello'
//         this.b = 'world'
//     }
// }
// let code = new Code()
// console.log(code.a + code.b);


// // 函数式编程 这是简单的函数式编程，通过函数的调用完成程序的功能。
// // 但是一般情况下的函数式编程会更复杂一些，会包含函数的组合。
// function code() {
//     const a = 'hello';
//     const b = 'world';
//     return a + b
// }
// console.log(code());


// new Promise((resolve) => {
//     console.log(0)
//     resolve(Promise.resolve(4))
// }).then((res) => {
//     console.log(res)
// })

// new Promise((resolve) => {
//     console.log(1);
//     resolve()
// }).then(() => {
//     console.log(2)
// }).then(() => {
//     console.log(3)
// }).then(() => {
//     console.log(5)
// }).then(() => {
//     console.log(6)
// })

/*

*/

// new Promise((resolve) => {
//     console.log(0)
//     resolve(Promise.resolve(4))
// }).then(res => {
//     console.log(res)
//     return new Promise((resolve) => {
//         resolve(10)
//     })
// }).then(res => {
//     console.log(res)
// })
// new Promise((resolve) => {
//     console.log(1)
//     resolve()
// }).then(res => {
//     console.log(2)
// }).then(res => {
//     console.log(3)
// }).then(res => {
//     console.log(5)
// }).then(res => {
//     console.log(6)
// }).then(res => {
//     console.log(11)
// })


/*

 HTML语义化的理解：
  
  - 用正确的标签做正确的事情
  - 段落用 p 标签，标题用 h 系列标签，边栏用 aside 标签，主要内容用 main 标签
  - html语义化让页面结构更清晰，更具有可读性，便于团队的开发和维护
  - 有利于搜索引擎解析，爬虫，SEO优化
     
*/

/* 

 顾名思义，Promse.race就是赛跑的意思，
 - Promise.race([p1, p2, p3])里面哪个执行的快，外层就使用哪个结果
 - 参数里面可以是常量，那么结果就是这个常量
 - 参数若为空数组 就不会执行 永远挂起 结果报错

*/

Promise.race = function (promise) {
    let promises = Array.from(promise)
    return new Promise(function (resolve, reject) {
        for (var i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i]).then(data => {
                resolve(data);
            }, err => {
                return reject(err)
            })
        }
    })
}


let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success')
    }, 1000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('failed')
    }, 1500)
})

Promise.race([p1, p2]).then((data) => {
    console.log('data：' + data)
}).catch((error) => {
    console.log('error：' + error)
})




for (var i = 1; i <= n; i++) {
    var i = 1
    while (i < n) {
        i = i * 2
    }
}
