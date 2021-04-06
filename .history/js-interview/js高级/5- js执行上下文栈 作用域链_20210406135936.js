





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


 