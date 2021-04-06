/* 
   EC(G)
   VO(G)/GO
       a
       fn -> 0x000 [[scope]]:EC(G)
*/
console.log(a)  // undefined
var a = 12
function fn() {
  /* 
    EC(FN)
      AO(FN)
      a
      作用域链：<EC(FN),EC(G)>
      形参赋值: --
      变量提升: var a
  */
  console.log(a) // undefined
  var a = 13
}
fn()
console.log(a)  // 12
/*

  fn 内部的a始终是局部变量，先在自身作用域链上查找。
  如果把fn 内部 var 变成let 会报错  Cannot access 'a' before initialization
  如果去掉fn内部 var 则  fn内部 console.log(a) =12  会向上级作用域查找

*/

// ===========================   华丽的分割线  ==============================

/* 

  var x = 1
  function func(x, y = function () { x = 2 }) {
    x = 3
    y()
    console.log(x)
  }
  func(5)
  console.log(x)

 */
// 参数y是默认参数，作用域是 func 所以执行的时候会改变fun内部x的值
// 注：参数默认值传 undefined 的时候相当于不传

var x = 1
function func(x, y = function () { x = 2 }) {
  console.log(x) // 5 
  var x = 3
  y()
  console.log(x) // 3
}
func(5)
console.log(x) // 1

/* 
  函数一旦设置'形参默认值'，不论是否生效，并且函数体中有基于 
  var/let/const 声明的变量（无论声明的变量和参数名是否一致,let、const声明和参数名
  一样会报错，不允许重复声明）
  会产生一种新的机制：
  1. 函数正常产生的上下文AAA，[初始化作用域链，初始化this，初始化arguments,形参赋值...]
  2. 会把函数体处理 抛离开这个私有上下文，形成一个全新的私有块级上下文BBB来处理。 
     BBB的上级上下文是AAA
  3. 原本函数执行产生一个上下文 现在产生两个上下文   
  4. 如果函数体中声明的变量和形参一致[只能是var声明的]，那么在块级作用域最开始，会把函数
     上下文形参的值同步给块级上下文中这个变量一份。
*/


var x = 1
function func(x, y = function () { x = 2 }) {
  console.log(x) // 5 
  var x = 3
  var y = function () { x = 4 }
  y()
  console.log(x) // 3
}
func(5)
console.log(x) // 1
