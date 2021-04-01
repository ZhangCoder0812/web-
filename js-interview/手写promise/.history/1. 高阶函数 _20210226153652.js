/*

高阶函数： 2个特点 满足一个就符合
     - 给一个函数传入一个函数 （回调）
     - 一个函数返回一个函数  （闭包）
     - 可以内置参数

装饰器模式(切片编程)：对原本的功能进行包装
     列如封装了一个功能的核心方法core供其他人使用，
     但是每个人调用core方法前要做自己的事情，总不能去
     修改core方法吧。那么就用到了装饰器模式，对core函数
     进行包装，先调用传入的函数 在调用core函数
     这样就不会对原有的core函数做任何修改。

        function core(a,b,c) {
           console.log(' core 核心',a,b,c)
        }

        // 将befroe方法定义在原型上 这样所有的函数都有before方法
        // 这里不是 core.prototype 是因为用core的时候 不是 new 去用的
        // 这里的core只是个普通函数 不是构造函数
        Function.prototype.before = function (beforeFn) {
            // 这里的this是 core
            return (...args) => { // 接受参数 这里没有箭头函数arguments
                // 这里写成function  函数里this是 newFn/window 因为newFn在调用
                // 改成箭头函数让这里的this往上找 是core
                beforeFn()
                console.log(this)
                this(...args) // 相当于 core()
            }
        }

        let newFn = core.before(() => {
            console.log(' 调用core函数之前做的事 ')
        })

        newFn(1,2,3)

     和这样直接写没有插入自己逻辑 和core()没有关联系 ,上面那种写法可以传入
     一个特定逻辑的函数
     function newFn() {
         console.log(' 调用core函数之前做的事 ')
     }
     newFn()
     core()

*/




let [a,b]＝[11,12]
 