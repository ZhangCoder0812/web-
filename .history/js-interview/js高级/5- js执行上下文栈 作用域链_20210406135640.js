/*
    function a() {
        b()
    }

    function b() {
        c()
    }

    function c() {
        console.log('haha')
    }

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



/*
    function a() {
        function b() {
            function c() {
                console.log('haha')
            }
        }
    }

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


 