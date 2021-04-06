/* 

compose函数：把一系列处理数据的函数像管道一样连接起来，然后通过管道得到结果。

*/
const add = (x) => x + 1;
const mul = (x) => x * 3;
const div = (x) => x / 2;

let res = div(mul(add(2)));
console.log(res);
 
上面这种写法可读性太差了，我们可以构建一个compose函数，接受任意多个函数参数，
「这些函数只接受一个参数」，最终执行compose返回的参数得到结果。
如：
let newFn = compose(div, mul, add)
newFn(2) => 相当于 div(mul(add(2)))


const add = (x) => x + 1;
const mul = (x) => x * 3;
const div = (x) => x / 2;

// 方式一： 借用reduceRight 每次迭代执行函数 正着来一个个执行
function compose(...fnList) {
  let len = fnList.length;
  if (len === 0) return (x) => x; // 不传函数参数的话 直接返回该值
  if (len === 1) return fnList[0]; // 就传一个函数的话 直接返回该函数
  return function (initial) {
    return fnList.reduceRight((result, item) => {
      return item(result);
    }, initial);
  };
}

// 方式二：反着来 把函数参数拼成原本的形式
function compose(...fnList) {
  if (fnList.length === 0) {
    return (arg) => arg;
  }
  if (fnList.length === 1) {
    return fnList[0];
  }
  return fnList.reduce((a, b) => {
    return (initial) => {
      return a(b(initial));
    };
  });
}

let res = compose(div, mul, add)(2);
console.log(res);
