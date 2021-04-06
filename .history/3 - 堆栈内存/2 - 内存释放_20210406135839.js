/* 


内存释放(优化)
   「堆内存」
       - 看当前内存地址是否被其他事物(变量/时间绑定)所占用，如果被占用就不能释放，因为
         一旦释放，以后别的东西基于这个地址就找不到了，如果没有被占用，则可以释放。。。
       - 手动释放：变量=null
   「栈内存」
       - 全局上下文，只有在页面关闭的时候才会被释放
       - 函数执行形成私有上下文，一般情况下，在函数执行完之后 私有上下文会自动出栈释放，
         如果当前上下文中的某些内容 被上下文以外的事物占用了 则不能出栈释放             


函数执行会产生一个私有上下文：
       - 保护作用：保护私有上下文中的私有变量不受外界干扰 防止变量污染
       - 保存作用：一旦当前上下文不被释放，上下文中的私有变量及其值都会被保存起来，
                 供其上下文调取使用。
       我们把函数执行产生的这两大作用称为‘闭包’机制。
       市面上一般认为只有产生不被释放的上下文才叫闭包。   

*/

function a() {
  b();
}

function b() {
  c();
}

function c() {
  console.log("haha");
}
/*
  模拟

    ECS = [
        globalContext 全局执行上下文栈
    ]

    函数执行都会产生执行上下文栈
    ECS.push(function A Context)
    ECS.push(function B Context)
    ECS.push(function C Context)

    执行完后弹出销毁 先进先出
    ECS.pop(function C Context)
    ECS.pop(function B Context)
    ECS.pop(function A Context)

    最后到了 globalContext 只有在页面关闭时才会销毁

*/
