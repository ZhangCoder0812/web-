let n = "10";
 
let x = {}+n
console.log(x) // 10 左侧的大括号当做代码块 不参与运算 运算的只有 +n 
console.log({x:2}+n) // 10 左侧的大括号当做代码块 不参与运算 运算的只有 +n 
console.log(n+{})