/* 

  事件对象：给元素绑定的事件方法执行，会给方法传递一个参数 这个参数就是事件对象。
           用来存储当前的事件操作及触发的事件相关信息。      
           + type 事件类型
           + target/srcElement 事件源 当前操作的元素
           + preventDefault() / returnValue=false 阻止默认行为
           + stopPropagation() / cancelBubble=false 阻止冒泡传播

        鼠标事件对象  MouseEvent 
           + clientX/clientY 鼠标触发点距离当前窗口左上角的坐标
           + pageX/pageY 鼠标触发点距离body左上角的坐标

        鼠标事件对象  KeyboardEvent
           + which / keyCode 获取键盘码    
              方向键：上38 下40 左37 右40
              Space 32 / BackSpace 8 / Del 46 / Enter 13
              Shift 16 / Ctrl 17 / Alt 18
              mac电脑没有BackSpace键，delete 8
              组合按键：
                 altKey 是否按下alt+其他键
                 shiftKey 是否按下shift+其他键
                 ctrlKey 是否按下ctrl+其他键

        手指事件：TouchEvent 移动端
           + changedTouches / touches / TargetTouches 
             记录手指信息 常用changedTouches 手指按下 移动 离开屏幕 都
             存储了对应手指的信息 哪怕离开屏幕 也会存储最后一次手指在屏幕
             上的信息。而touches在手指离开屏幕后 就没有任何信息。 
             e.changedTouches[0] 第一根手指信息 clientX/clientY/pageX/pageY...
      
        普通的事件对象 Event
                window.onload= function(e) {
                    console.log(e)  
                }          
           
   
    let x      
    document.body.onclick = function(e) {
        x= e ;
        console.log(e) 事件对象
    }
    document.body.onclick = function(e) {
        console.log(e==x)  true 事件对象跟在哪个函数中拿到的没有关系
    }



*/

/* 

  阻止默认行为：浏览器会赋予元素很多的默认行为操作
     + 鼠标右键菜单
     + 点击a标签实现页面跳转
     + 部分浏览器会记录输入记录 在下一次输入的时候模糊匹配
     + 键盘按下会输入内容
     ...

  1. 阻止鼠标右键菜单 使用自己菜单
  2. a标签默认行为 
      - 页面跳转
        <a href="#">跳转</a>
        <a href="javascript:;">定位</a>

      - 锚点定位（定位到当前页面指定id元素的位置 URL中会加入hash值）
        <a href="#box">定位</a>
        <div id="box">xxxx</div>
    
  
  
    


*/
