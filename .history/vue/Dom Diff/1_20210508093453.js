/* 

  虚拟DOM vNode 都是new出来的 是一个JS对象

  文档碎片 不是 虚拟DOM 
    - 文档碎片是真实DOM的一个属性
    - 虚拟DOM是一个JS对象 


  虚拟DOM的比较是同级比较，跨级比较复杂度太高
  
  数据更改触发set函数 
    -> 执行对应的Dep.notify 
    -> 通过patch对比新旧虚拟节点
    -> 判断两个节点是否相同
       -> 不相同 用新的虚拟节点替换旧的虚拟节点
       -> 相同 pathVnode 比较子节点是否相同

*/