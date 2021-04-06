

 
/* 
  EC(G)
    foo: 预编译阶段 -> undefined
         代码执行阶段 -> [Function: foo]
*/
{
  /* 
    EC(B): foo: [Function: foo]
  */
  function foo() { }
  foo = 1
  console.log(foo) // 1
}
console.log(foo) // [Function: foo]

/*
  1. 块级作用域中，function在块级作用域会声明+赋值，但在块级
     作用域外部只会声明 不会被赋值。
  2. 当执行到 内部 function foo() {} 时把当前代码以上对foo
     的操作同步给全局一份，但之后对foo的操作就和全局没关系了，
     改变的都是私有的。

  所以 里面 foo => 1
       外层输出 foo => [Function: foo]
*/

// ===========================   华丽的分割线  ==============================


/* 
  EC(G)
    foo: 预编译阶段 -> undefined
         代码执行阶段 -> [Function: foo] -> 1
*/
{
  /* 
    EC(B): 
       foo -> 0x000
           -> 0x0001 
  */
  function foo() { }  // 将之前对foo的操作同步给全局一份 window.foo = 0x001
  foo = 1  // 将私有的 foo=1
  function foo() { }  //  将之前对foo的操作同步给全局一份 window.foo = 1
  console.log(foo) // 1
}
console.log(foo) // 1