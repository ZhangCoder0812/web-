/*

 函数式编程：
    函数式编程是编程范式中的一种，是一种典型的编程思想和方法。
    其他的编程范式还包括 面向对象编程，命令式编程 等。

*/

// 命令式编程，通过调用 const 和 console.log 进行赋值和输出。
const a = 'hello';
const b = 'world';
console.log(a + b);

// 面向对象编程
class Code {
    constructor() {
        this.a = 'hello'
        this.b = 'world'
    }
}
let code = new Code()
console.log(code.a + code.b);

new Promise((resolve) => {
    console.log(0)
    resolve(Promise.resolve(4))
}).then((res) => {
    console.log(res)
})

new Promise((resolve) => {
    console.log(1);
    resolve(Promise.resolve(4))
}).then(() => {
    console.log(2)
}).then(() => {
    console.log(3)
}).then(() => {
    console.log(5)
}).then(() => {
    console.log(6)
})

/*

0
1
4
2
3
4
5
6
11
10

*/