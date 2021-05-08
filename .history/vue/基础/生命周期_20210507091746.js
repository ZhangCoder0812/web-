/* 

updated 只有数据在试图上使用了 以后数据变了才会触发

destoryed  组件销毁时调用 用于清除定时器和移除事件绑定

生命周期执行 创造是先父后子 完成是先子后父  跟新先父后子

<keep-alive>
  <组件>
<keep-alive>
被keep-alive包裹的组件会被缓存起来 不被销毁 destoryed 没法被zhixing
用于表单 切换页面时被容不被清除
activated 激活时调用  deactivated 休眠时调用 只有keep-alive中这两个生命周期才有效


*/
