/* 

 VO(Variable Object)：
    - 变量对象，存储当前上下文中声明的变量，JavaScript引擎实现 无法直接访问
    - 创建阶段声明VO ，一般包含 var function 声明的变量

 AO(Activation Object)：
    - 活动对象，进入执行阶段之后 VO激活成AO   
    - VO和AO是同一个对象 在不同阶段做不同的事
    - AO包含VO ， AO = VO + 函数参数 + arguments

 VO(G)：全局变量对象 严格来说是一个区域 在栈内存中
      {
          window,指向GO // node下是Global
          用户的变量...
      }
   
 GO：全局对象 存放在堆内存中 存放浏览器默认提供的api
    {
     alert,   
     setTimeout,
     setInterval,
     ...   
    }

*/

var a = 12;
/*
 1. 创建一个值 12 存到栈内存
 2. 声明一个变量a 存储到当前上下文的 VO 中
 3. 让 a 和 12 关联在一起
*/

var n = 100 ;
function sum(a,b) {
    var c = 2
    var d = function(){}
    function total(){}
    b=10
}
sum(10)

/* 

  GO(globalContext){
      n:100,
      sum:ref to function sum
  }

  VO(sumContext){
      a:10,
      b:undefined,
      total:ref to function total,
      d:undefined,
  } 

  

*/