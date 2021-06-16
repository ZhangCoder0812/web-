/* 

1. 把你了解的vue响应式原理阐述一下？
   - 首先vue中有三个核心类
     + Observer：给对象的属性添加getter和setter，用于依赖收集和派发更新
     + Dep：用于收集当前响应式对象的依赖关系，每个响应式对象都有一个dep实例，
            dep.subs = watcher[] 当数据发生改变的时候，会通知dep.notify()
            通知各个watcher执行
     + Watcher：观察者对象         

*/
