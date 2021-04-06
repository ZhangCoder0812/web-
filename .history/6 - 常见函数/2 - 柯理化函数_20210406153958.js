/* 

柯理化思想：预处理

 柯理化也是高阶函数,每次传入一个参数，返回一个函数，
 当传入参数和接受参数一致时 就会执行
 核心 : 递归
 用途： redux -> compose , node -> middleware , next ,router.beforeEach()
 也是一个闭包

*/

/* 

简单的的柯理化 函数传参长度固定
   const fn = (...params) => {
    return function (...args) {
      let argsArr = [...params, ...args];
      return argsArr.reduce((result, item) => result + item);
    };
  };
  
  let res = fn(1, 2)(3);
  console.log(res); // 6

*/

// 函数传参长度不固定  
function curring() {
  let argsArr = [];
  const add = (...args) => {
    argsArr = [...argsArr, ...args];
    return add; // 供其转化为字符串 执行得到结果
  };
  // 重写toString方法 在页面中可以 直接node输出不了 
  // 无论是alert还是console.log() 在输出函数的时候 都要转为字符串 然后在输出
  // 借用转化为字符串的时候让其执行  执行console.log()一用就执行
  add.toString = () => {
    return argsArr.reduce((result, item) => result + item);
  };
  return add;
}

let add = curring();
let res = add(1)(2)(3);
console.log(res); // 再页面使用就会转化为字符串

add = curring();
res = add(1, 2)(3);
console.log(res);
