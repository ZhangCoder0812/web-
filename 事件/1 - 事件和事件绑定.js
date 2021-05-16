/* 
    
 什么是事件？
     - 事件是浏览器赋予元素的默认行为，天生就有，无论我们是否为其绑定
       方法，当某些行为触发的时候 相关的事件都会被触发执行
    
 常见事件：
     - 鼠标事件
         click 点击事件
                 + PC 无论点击还是双击 就是点击 频繁点击N次 触发N次) 
               单击事件
                 + 移动端 300ms内没有发生第二次点击 算作点击事件 
                    所以click在移动端有300ms延迟
                 + 第一次点击完 需要等300ms 看看这段时间内是否触发了第二次，
                    触发了就不是click点击行为了 属于双击
          dbclick 双击 
                 + pc端只有点击和双击 没有单击
                 + 移动端有click单击 dbclick双击 
          contextmenu 右击 鼠标右键点击触发
          mousedown 鼠标按下
          mouseup 鼠标抬起
          mousemove 鼠标移动
          mouseover 鼠标滑入
          mouseout 鼠标滑出
          mouseenter 鼠标进入
          mouseleave 鼠标离开
          wheel 鼠标滚轮滚动          
          ...      

     - 键盘事件
          keydown 键盘按下
          keyup 键盘抬起
          keypress 长按 (除Shift/Fn/CapsLock的任意键)

     - 手指事件
          单手指事件模型 Touch Event
            touchstart 手指按下
            touchmove 手指移动
            touchend 手指松开
          多手指事件模型  Gesture Event
             ...

     - 网络事件
          online 有网
          offline 断网        
            
     - 焦点事件
          focus 获取检点
          blur 失去焦点
            
     - 表单事件 
          submit 表单提交   
          reset 表单重置
          change 内容改变
          input  文本框内容改变
          select 下拉框内容选中 
          
     - 资源事件
          load 加载成功
          error 加载失败
          beforeunload 资源卸载前(window.onbeforeunload页面关闭之前触发)
            
     - css动画事件
          transitionend 动画结束     
          transitionstart 动画开始   
          transitionrun 动画运行中  
            
     - 视图事件
          resize 窗口大小改变 
          scroll 滚动条滚动

     - 存储事件
          change
          storage 
        
     - 打印机事件
     - 剪贴板事件      
     
    
    
 什么是事件绑定？
     - 给元素默认的事件行为绑定方法，这样可以在行为触发的时候 执行这个方法     

     document.body.onclick = function() {};
     常见说法：给body添加点击事件
     标准说法：给body的点击事件行为绑定方法

    
 DOM0级事件绑定
     语法：xxx.on[事件名] = function(){}
          document.body.onclick = function(){}
     移除：赋值为null
     原理：每一个DOM元素对象的私有属性上都有很多 'onxxx' 的私有属性，
          初始值为null，我们给这些私有属性赋值为函数 就是DOM0级事件绑定
     特点：
          + 如果没有对应事件的私有属性则无法实现事件绑定(如：DOMContentLoaded) 
               值为undefined
          + 同一事件绑定多个之前的会被覆盖，只会执行最后一个   
          + 执行效率快 使用起来方便   

 DOM2级事件绑定（ 事件池的概念 将绑定的方法放入事件池中 一次执行 ）
     语法：xxx.addEventListener(事件,方法,[冒泡false/捕获true])
          document.body.addEventListener('click',function(){},false)
     移除：xxx.removeEventListener(事件,方法,[冒泡false/捕获true])
     原理：每一个DOM元素都会基于原型链找到EventTarget.prototype上的addEventListener/
          removeEventListener等方法，基于这些方法实现事件的绑定和移除
     特点：
          + 绑定的方法一般不是匿名函数 要有名字 便于移除
          + 凡是浏览器提供的事件行为 都可以基于这种模式完成事件绑定/移除。例如:
            window.DOMContentLoaded是不行的 因为没有这个私有的事件属性，但是
            可以这样 window.addEventListener('DOMContentLoaded',function(){})
          + 同一事件绑定多个不会被覆盖 都会执行 所有的方法都会加入事件池 按照绑定
            顺序执行
    
    */
