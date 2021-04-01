


 /*  
 
 一个事件触发后，会在子元素和父元素之间传播。这种传播分成三个阶段。
（1）捕获阶段：自顶向下 从window对象传导到目标节点，捕获阶段不会响应任何事件；
（2）目标阶段：在目标节点上触发，称为“目标阶段”
（3）冒泡阶段：自底向上 从目标节点传导回window对象。

 事件代理即是利用事件冒泡的机制把里层所需要响应的事件绑定到外层


  Window.addEventListeber(‘click’,()=>{},  ) 监听的是什么阶段事件
    -  与第三个参数有关
       默认flase  冒泡阶段， true  捕获阶段


 */

