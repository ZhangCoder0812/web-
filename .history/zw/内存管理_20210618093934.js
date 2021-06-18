/* 

1. 内存的生命周期

    内存分配：声明变量，函数，对象的时候 js会自动分配内存
    内存使用：调用的时候，使用的时候
    内存回收：不用的时候

2. js中的垃圾回收机制
  
   引用计数：a对象对b对象有访问权限，那么成为a引用b对象
            缺陷：循环引用 互相引用

   标记清除：在运行的时候给存储在内存中的所有变量加上标记，
            从根部触发，能触及的对象，把标记清除
            哪些有标记的就被视为即将要删除的变量  
            
3. js中有哪些常见的内存泄漏
  
    全局变量
    未被清除的定时器和回调函数
    闭包
    dom的引用：
        const elements = {
            image: document.getElementById("image"),
        };
        document.body.removeChild(document.getElementById("image"));
        虽然image被移除了 但是elements对象中的引用关系还在
        解决：elements.image

          

*/

 
