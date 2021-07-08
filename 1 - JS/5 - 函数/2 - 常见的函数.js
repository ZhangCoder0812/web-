/* 

  常见的函数：
    - 普通函数 「实名/匿名函数/自执行函数」
    - 箭头函数 ,没有 prototype
    - 构造函数/类 「内置类/自定义类」 
    - 生成器函数 Generator 

*/

let obj = {
  fn: function () {}, // 有 prototype
  sum() {}, // es6简写的函数 没有 prototype
};

let fn = () => {}; // 箭头函数 没有 prototype

(function add() {})(); // 自执行函数 有 prototype

/*   

构造函数执行(new执行) VS 普通函数执行 ：
    构造函数执行会创建实一个新对象，普通函数执行不会 
    this 不同: 
           构造函数this指向实例，相当于给实例添加私有属性
           普通函数执行前面谁点this就是谁，没有的话是window
    return 结果不同：
           构造函数return的是普通数据类型或不写return 返回的是实例对象，
                  return的是对象则返回该对象
           普通函数return是啥就是啥 不写return是undefined
           
*/

/* 

  箭头函数 VS 普通函数
     - 语法区别。
     - this区别：箭头函数没有自己的this，向所在上下文中查找
     - 原型区别：箭头函数没有prototype 不能被new执行
     - arguments：箭头函数没有arguments

*/
