


 /*  
 
 一个事件触发后，会在子元素和父元素之间传播。这种传播分成三个阶段。
（1）捕获阶段：从window对象传导到目标节点，捕获阶段不会响应任何事件；
（2）目标阶段：在目标节点上触发，称为“目标阶段”
（3）冒泡阶段：从目标节点传导回window对象（从底层传回上层），称为“冒泡阶段”（bubbling phase）。事件代理即是利用事件冒泡的机制把里层所需要响应的事件绑定到外层
 
 */