/* 

 组件：具有某一具体功能的模块

 全局组件、局部/业务组件

 import xxx from './xxx.vue'
 console.log(xxx)  组件就是一个对象
 Vue.component(xxx.name,xxx)


 子组件修改父组件数据
    - 如果是基本数据类型直接修改会报错
    - 如果是引用数据类型 直接修改其中某个属性不会报错
    但不建议直接修改 使用自定义事件修改


 父组件调用子组件方法
    - 通过ref获取子组件实例再获取
    <child ref='xxx' />   
    this.$refs.xxx.
*/
