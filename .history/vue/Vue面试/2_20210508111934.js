/* 

组件通信：
   - props+$emit

   - vuex 
      缺陷：刷新时数据丢失 
      为什么丢失：vuex就是一个空对象 刷新时重新赋值
      解决：持久化 配合插件或者手动放入到localStorage中

   - $parent $children $refs

   - 路由传参

   - eventBus 事件总线 (发布订阅 $on $emit $off)
     创建一个空的Vue实例 通过$on绑定某个组件中的事件 
     在另一个组价中通过$emit触发

   - $attrs $listeners
     $attrs 存储的是没有被props接受的属性 
     $listeners 存储的是所有传递的事件 

   - $slots $slotScope  

   - provide inject

*/

/* 

 v-for 和 v-if 为什么不能一起使用？
   
  vue2.x v-for优先级高
  vue3   v-if优先级高

*/