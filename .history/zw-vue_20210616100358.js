/* 

1. 把你了解的vue响应式原理阐述一下？
    - 首先vue中有三个核心类
     + Observer：给对象的属性添加getter和setter，用于依赖收集和派发更新
     + Dep：用于收集当前响应式对象的依赖关系，每个响应式对象都有一个dep实例，
            dep.subs = watcher[] 当数据发生改变的时候，会通知dep.notify()
            通知各个watcher执行
     + Watcher：观察者对象：render watcher / computed watcher / user watcher

    - 依赖收集
     + initState，对computed属性初始化时 会触发 computed watcher 依赖收集
     + initState，对监听初始化的时候 触发 user watcher 依赖收集
     + render，触发 render watcher 依赖收集
     
    - 派发更新
     + 组件中对响应式数据进行修改，会触发setter
     + dep.notify() 
     + 遍历所有的subs 调用每一个watcher的update方法 
   
    - 总结：
      当创建vue实例的时候，vue会遍历data里的属性，Object.defineProperty 为属性
      添加getter和setter对数据进行劫持。
      getter：依赖收集
      setter：派发更新
      每个组件的实例都会有对应的watcher实例 

*/
