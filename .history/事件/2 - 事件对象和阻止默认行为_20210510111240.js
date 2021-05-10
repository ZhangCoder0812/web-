/* 

  事件对象：给元素绑定的事件方法执行，会给方法传递一个参数 这个参数就是事件对象。
           用来存储当前的事件操作及触发的事件相关信息。
           + clientX/clientY 鼠标触发点距离当前窗口左上角的坐标
           + pageX/pageY 鼠标触发点距离body左上角的坐标
           + type 事件类型
           + target/srcElement 事件源
   
      let x      
      document.body.onclick = function(e) {
          x= e ;
          console.log(e) 事件对象
      }

      document.body.onclick = function(e) {
          console.log(e==x)  true 事件对象跟在哪个函数中拿到的没有关系
      }

*/
