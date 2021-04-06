
/*

  关于this的5种情况：
      this：函数的执行主体(谁执行的函数)
      - 事件绑定
      - 函数执行「普通函数执行 成员访问 匿名函数 回调函数」
      - 构造函数
      - 箭头函数 没有this 向上级查找 call/apply/bind改变不了箭头函数的this
      - 基于call/apply/bind改变this

  全局上下文的 this->window
  块级作用域中没有自己的this 执向上级上下文中的this 「箭头函数也是」

*/

/*

   事件绑定
     DOM0 级  xxx.onXXX = function(){}
     DOM1 级  事件处理没有多大改变
     DOM2 级  xxx.addEventListener=function(){} 不兼容IE6/7/8
                  -> 移除事件绑定 removeEventListener
              xxx.attachEvent('onXXX',function(){}) 兼容IE6/7/8
                  -> 移除事件绑定 

    给元素绑定事件「创建方法，并未执行」，此时this是当前绑定元素
      - 特殊：基于attachEvent实现事件绑定 方法执行 this是window             

*/

/*

  函数中的this
  
    - 正常普通函数执行：看前面是否有点，有点前面是谁this就是谁，没有点this是window/global
                    「严格模式 undefined」js默认非严格模式 "use strict" 开启严格模式

            function fn() {
                console.log(this);
            }

            let obj = { name: "wade", fn };

            fn();  window
            obj.fn();  obj

    - 括号表达式(x,y,z) 小括号中包含许多选项 结果返回最后一项，this会受到影响
          
           (10,obj.fn)();   window/global

    - 匿名函数
        1. 函数表达式: this等同与普通函数机制
            var fn = function(){
                console.log(this)
            }
            fn() // window

        2. 自执行函数：创建+执行一起完成 this一般为winodw/global
            (function () {
              console.log(this); 
            })();

        3. 箭头函数    
            let obj = {
              x: 0,
              fn: () => {
                console.log(this); // window
              },
            };
            obj.fn();

        4. 回调函数：this一般为winodw/global ，特俗情况具体分析
            let arr = [1, 2, 3];
            arr.forEach(function() {
                console.log(this);   window
            });
            
            forEach第二个参数可改变this，但回调函数要是箭头this还是window
            arr.forEach(function() {
                console.log(this);   { name: 'wade' } 
            },{name:"wade"});      
            
            let obj = {
              x: 0,
              fn() {

                console.log(this); // obj

                setTimeout(function () {
                  console.log(this); // window
                }, 1000);

                setTimeout(() => {
                  console.log(this); // obj 箭头函数没有this 向上找
                }, 1000);

              },
            };
            obj.fn();
            
*/

var x = 3,
  obj = { x: 5 };
obj.fn = (function () {
  this.x *= ++x;
  return function (y) {
    this.x *= ++x + y;
    console.log(x);
  };
})();
var fn = obj.fn;
obj.fn(6);
fn(4);
console.log(obj.x, x);

/*

总结：

  this跟执行时有关！！！（箭头函数定义时有关）
   - 直接调用函数，不管函数被放在什么位置，this都是window 严格模式下 undefined
   - 被别人调用，谁点出来的就是谁(执行时调用的那个对象)
     原因：访问符访问函数 函数会隐士的绑定前面的对象
   - 构造函数内中 this.xxx=xxx 中的 this 是当前类的实例
   - call apply bind 执行函数this是第一个参数
   - 箭头函数没有自己的this 指向定义时候外层的this
   - 箭头函数可以调用 call apply bind 不会报错，也不会影响this指向

*/
