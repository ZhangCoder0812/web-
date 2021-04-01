/* 

高阶函数： 2个特点 满足一个就符合
     - 给一个函数传入一个函数 （回调）
     - 一个函数返回一个函数  （闭包）

装饰器模式：对原本的功能进行包装
     列如封装了一个
        

*/

function core() {
    console.log(' core 核心')
}
Function.prototype.before=function(){

}

core.before(() => {
    console.log(' 调用core函数之前做的事 ')
})