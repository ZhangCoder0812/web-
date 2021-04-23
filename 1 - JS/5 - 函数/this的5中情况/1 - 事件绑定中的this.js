
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