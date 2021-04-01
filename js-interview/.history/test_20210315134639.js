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

  - JS 中整数的最大范围是：-9007199254740991  ~ 9007199254740991
    任何超出此范围的整数值都可能失去精度

  - JS 提供 Number.MAX_SAFE_INTEGER 常量来表示最大安全整数，
            Number.MIN_SAFE_INTEGER 常量表示最小安全整数  

  - 为了解决这些限制，一些JS开发人员使用字符串类型表示大整数 。
    使用BigInt现在可以在标准JS中执行对大整数的算术运算，而不会有精度损失的风险        
            
*/

// 要创建BigInt，只需在整数的末尾追加n即可
console.log(9007199254740995n) // 9007199254740995n
console.log(9007199254740995) // 9007199254740996 大数不加n 损失精度

// 或者，可以调用BigInt()构造函数
console.log(BigInt("9007199254740995")) // 9007199254740995n

// BigInt文字也可以用二进制、八进制或十六进制表示
console.log(0b100000000000000000000000000000000000000000000000000011n);
console.log(0x20000000000003n); //  9007199254740995n
console.log(0o400000000000000003n);