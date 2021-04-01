/* 

高阶函数： 2个特点 满足一个就符合
     - 给一个函数传入一个函数 （回调）
     - 一个函数返回一个函数  （闭包）

装饰器模式(切片编程)：对原本的功能进行包装
     列如封装了一个功能的核心方法core供其他人使用，
     但是每个人调用core方法前要做自己的事情，总不能去
     修改core方法吧。那么就用到了装饰器模式，对core函数
     进行包装，先调用传入的函数 在调用core函数 
     这样就不会对原有的core函数做任何修改。
        
        function core() {
           console.log(' core 核心')
        }

        // 将befroe方法定义在原型上 这样所有的函数都有before方法
        // 这里不是 core.propoy
        Function.prototype.before = function (beforeFn) {
            // 这里的this是 core
            return () => {
                // 这里写成function  函数里this是 newFn/window 因为newFn在调用
                // 改成箭头函数让这里的this往上找 是core
                beforeFn()
                console.log(this)
                this() // 相当于 core()
            }
        }

        let newFn = core.before(() => {
            console.log(' 调用core函数之前做的事 ')
        })

        newFn()

     和这样直接写没有插入自己逻辑 和core()没有关联系 ,上面那种写法可以传入
     一个特定逻辑的函数
     function newFn() {
         console.log(' 调用core函数之前做的事 ')
     }  
     newFn()
     core()

*/




 
 