/*

函数执行机制：

   「创建函数」

      1. 在堆内存中分配一块空间「16进制内存地址」
      2. 除了存储一些键值对「和对象一样」，还做了一些其他的事情
          - 声明了函数的作用域[[scope]]，作用域的值是当前创建函数时候所在的上下文
          - 把函数体中的代码当作字符串存储到堆内存中
          - 和对象一样，存储一些自己的键值对「静态私有的属性和方法」
      3. 把内存地址赋值给对应的变量「函数名」

   「执行函数」
      1. 形成一个私有上下文 EC(x) 供后期函数体中的代码执行 「进栈和出栈」
          - 在私有上下文中 又一个后期存储当前上下文中声明变量的地方“私有变量对象AO”
            AO 是 VO 的分之，在函数中，变量对象是AO
          - 进栈执行
      2. 在代码执行之前，还会处理很多事情 
          - 初始作用域链[[scope-chain]] <EC(x),EX(G)>  
            先在自身上下文 EC(x) 如果找到了 操作这个变量和外界没有任何关系
            再在上级上下文中查找 EC(G),按作用域链查找
          - 初始化this指向
          - 初始化arguments
          - 形参赋值：形参变量也是当前上下文中的私有变量 是要存储到AO中的
          - 变量提升
      3. 代码执行
      4. 一般情况下 代码执行完 当前形成的私有上下文会出栈释放 以此来优化内存空间

*/

let a = 1;
function fn() {
  let a = 2;
  fn = function () {
    console.log(a++);
  };
  console.log(a++);
}

fn(); // 2
fn(); // 3
