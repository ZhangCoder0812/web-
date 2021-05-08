/* 

1. 组件通信：
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


2. v-for 和 v-if 为什么不能一起使用？
        连用容易造成性能浪费 
        vue2.x v-for优先级高
        vue3   v-if优先级高

3. 为什么使用异步组件？这里直指的是路由懒加载 。真正的异步组件？？？？
        - 节省打包的体积，异步组件分开打包，采用jsonp的方式进行加载
            有效解决文件过大问题
        - 核心就是将使用import()引入组件  

4. Vue抽离公共逻辑？
      使用 Vue.mixin

5. vue数据频繁变化为什么只更新一次？
      异步跟新


6. Object.defineProperty的缺陷？
     - 每个属性都要遍历劫持
     - 动态新增的属性劫持不了 $set可以解决
       obj:{name:wade}
       this.obj.age=12 检测不到变化
       this.obj = {...this.obj,age:10} 可以检测到变化
       this.$set(this.obj,age,10) 可以检测到变化
     - 不适合劫持数组   

7. watch的深度监听
       obj:{name:wade}
       this.obj.name='lbj' watch检测不到变化 因为对象的地址没有改变
       this.obj = {...this.obj,name:lbj} 可以检测到变化 地址改变了
       deep:true
  
8. Vue中组件生命周期调用顺序说一下
       

*/