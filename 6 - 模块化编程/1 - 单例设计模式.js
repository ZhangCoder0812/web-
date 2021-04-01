
/*

let name = 'wade'

let name = 'lbj'

一个文件中直接这样写会引起命名冲突，
那我们可以将其包装在自执行函数里(闭包)

*/

/*
   基于闭包的方式保证了变量的私有性，不被污染，但是
   不能相互掉调用 ， IIFE 立即执行函数

    (function () {
        let name = 'wade'
    })()

    (function () {
        let name = 'lbj'
    })()

*/

/*
  解决相互调用 方式一：通过window暴露到全局上，不适合暴露太多属性
   (function () {
       let name = 'wade'
       let fn = function () { }
       window.fn()
   })()

   (function () {
       let name = 'lbj'
       fn()
   })()

*/

/*
  方式二：通过对象访问，每一个对象都是一个单独的空间，避免变量
          污染，实现相互引用。
        - 这种一个个对象就是最简单的 "单例设计模式" ，每一个对象都是Object的实例。
        - p1,p2 也可以被称为命名空间 nameSpace，后期可以基于命名空间访问
          到空间中指定内容

   let p1 = {
       name: 'wade',
       fn() { }
   }

   let p2 = {
       name: 'lbj',
       handle() {
           p1.fn()
       }
   }

*/

/*
  方式三：闭包+单例模式 = 高级单例模式
         使用 return 方式将模块中内容暴露出去

   let moduleA = (function () {
        let name = 'wade'
        let fn = function () { }
        return {
            fn
        }
    })()

    (function () {
        let name = 'lbj'
        moduleA.fn()
    })()

*/

