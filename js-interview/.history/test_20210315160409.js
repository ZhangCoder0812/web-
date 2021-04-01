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
  
  - 用正确的标签做正确的事情。
  - html语义化让页面结构更清晰，便于对浏览器，
    搜索引擎解析；即使在没有css样式的情况下，也以一种文档格式显示，并且是容易阅读的；
    搜索引擎的爬虫也依赖于HTML标记来确定上下文和各个关键字的权重，
    利于SEO；使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。

*/




