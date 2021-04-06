/* 

 作用域：一般理解为变量的作用范围
         分为 全局作用域 ， 函数作用域，块级作用域
         没有局部作用域
    1.全局作用域：        
         - 页面打开时创建，关闭时销毁
         - 声明的变量和函数会被保存到window上
    2.函数作用域：
         - 函数调用时被创建 执行完毕 作用域被销毁
         - 函数没调用一次就会创建一个新的作用域 相互独立 没有影响
         - 函数内可以访问到全局作用域变量 函数外无法访问到函数作用域中的变量
         - 函数作用域中变量查抄先在自身作用域范围内查找 若找不到 逐级向上查找          
   
  函数预编译：
        1. 创建 AO 对象 ，AO{}       
        2. 变量声明 将形参和变量当做AO对象的属性 赋值为undefined
        3. 实参赋值形参
        4. 函数声明+赋值

  全局作用域预编译：
        1. 创建 GO 对象      
        2. 找变量声明 将变量当做GO对象的属性 赋值为undefined
        3. 在函数里面找函数声明 值赋予函数体

  作用域链： AO + GO
        - 会被保存到一个隐式的属性[[scope]]中，这个属性我们是访问不到的，
          但是确实存在，让js引擎访问，里面存储的是作用域链。
        - 函数会保留一个内部属性 [[scope]]  保存了所有的父变量对象
          函数执行时会把AO对象加进去，执行时 先找自己的AO对象 找不到再
          通过这个链向上查找
         


*/

function a() {
    function b() {
          function c() {
                console.log('haha')
          }
    }
}

/*
作用域链 静态的 (在函数定义时就决定了) 函数会保留一个内部属性 [[scope]]
保存了所有的父变量对象

  a.[[scope]] = [
      globalContext.VO
  ]

  b.[[scope]] = [
      aContext.VO,
      globalContext.VO
  ]

  c.[[scope]] = [
      bContext.VO,
      aContext.VO,
      globalContext.VO
  ]

作用域链查找现在当前上下文栈查找 找不到逐级向上查找 一直到全局对象

*/

var a = 1
function sum() {
    var b = 2
    return a + b
}
sum()

/*
 1. 函数会保留一个内部属性 [[scope]] 指向父级变量
      sum.[[scope]] = [
          globalContext.VO
      ]

  2. 函数执行之前的准备工作 , 会把自己的作用域链拷贝一份 和 AO 对象 放到scope属性上
     执行时 先找自己的AO对象 找不到再通过这个链向上查找
      sumContext={
          AO:{
             arguments:{  没有参数
                 length:0
             },
             b:undefined  未赋值
          },
          scope:[AO,sum.[[scope]]]
      }

 3.   函数执行时 产生函数执行上下文栈
       ECS = [
           globalContext ,
           sumContext
       ]
       sumContext.AO:{
           arguments:{
                length:0
           },
           b:2   赋值
        },

*/