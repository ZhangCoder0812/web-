
/*

上下文：全局上下文  函数上下文  块级上下文

块级上下文(ECB) EC Block： 新版浏览器才有 老版浏览没有 也就不存在下面机制

    - 在除函数，对象之外的大括号中「如：判断体if，循环体for while...等」，如果出现
      ‘let/const/function’ 那么当前大括号所处的代码块 就会产生一个私有的块级上下文

    - 在此上下文中基于‘let/const/function’ 声明的变量都是私有变量。
      特殊：1. function会在块级上下文和其上级上下文中都会被声明处理。
              在块级上下文之外只会被声明 不会被赋值 .
              在块级上下文中还是 声明+赋值 
              * 函数被全局上下文和块级上下文都处理过，所以当执行到函数这行代码时
                就不会在处理，把之前对函数的处理「声明+定义」复制给全局上下文中一份。
                之后对这个函数的处理和全局中就没有关系了。
           2. 基于var声明的变量既不会产生块级上下文 也不会受块级上下文的影响 
           3. 块级作用域中  function 就和 let/const类似 不允许重复声明

*/

console.log(d); // undefined
{
  console.log(d); // [Function: d]
  var a = 1;
  let b = 2;
  const c = 3;
  function d() { }
  d = 100;
  console.log(d); // 100
}
console.log(d); // [Function: d] 全局作用域的d只会被赋值一次
// console.log(b, c); // 报错 b，c 私有的

let i = 0; // 这时i是全局的
for (; i < 5; i++) { }

for (let i = 0; i < 5; i++) {
  // 这时i是私有的
}

for (let i = 0; i < 5; i++) {
  i += 1;
  console.log(i), 0;
}


a = 2
{
  var a = 1
  function a() { }
}
console.log(a)