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

  - 能捕捉到的异常，必须是线程执行已经进入 try catch 
    但 try catch 未执行完的时候抛出来的

*/

// 捕获不到 因为语法异常是在语法检查阶段就报错了 代码执行尚未进入 try catch 代码块 
try {
    a.
} catch (e) {
    console.log("error", e);
}

// 捕获不到 方法定义在 try catch 代码块里面，但是执行方法在 try catch 外，
// 在执行 d 方法的时候报错，此时 try catch 已经执行完成
try {
    function d() { a.b; }
} catch (e) {
    console.log("error", e);
}
console.log(111);
d();

// 能捕捉到异常 方法和执行都在 try 里面，能捕捉到异常
try {
    function d() { a.b; }
    d();
} catch (e) {
    console.log("error", e);
}

// 能捕捉到异常 方法定义在外部，执行方法在 try 里面，能捕捉到异常
function d() { a.b; }
try {
    d();
} catch (e) {
    console.log("error", e);
}