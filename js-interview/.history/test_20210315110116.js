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

相对于外部 try catch，Promise 没有异常

 - 事实上，Promise 的异常都是由 reject 和 Promise.prototype.catch 来捕获，
   不管是同步还是异步。
 - 核心原因是因为 Promise 在执行回调中都用 try catch 包裹起来了，其中所有
   的异常都被内部捕获到了，并未往上抛异常

*/

/* 
可以捕获到 报错的时候( setTimeout 里面的 reject )，线程执行已经进入 try catch 代码块，
但是并未执行完成，这样的话当然可以捕获到异常。await 将代码执行停留在 try catch 代码块里面的缘故
*/
function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(1);
        })
    })
}
try {
    await a();
} catch (e) {
    console.log('error', e);
}


