/* 

1. 把你了解的vue响应式原理阐述一下？
    - 首先vue中有三个核心类
     + Observer：给对象的属性添加getter和setter，用于依赖收集和派发更新
     + Dep：用于收集当前响应式对象的依赖关系，每个响应式对象都有一个dep实例，
            dep.subs = watcher[] 当数据发生改变的时候，会通知dep.notify()
            通知各个watcher执行
     + Watcher：观察者对象：render watcher / computed watcher / user watcher用户自己创建的watcher

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
      每个组件的实例都会有对应的watcher实例。 

2. 计算属性的原理
   computed watcher 计算属性监听器
   computed watcher 持有一个dep实例，通过dirty属性标记计算属性是否需要重新求值，
   当computed的依赖值改变后，就会通知订阅的watcher进行更新，对于computed watcher
   会将dirty属性设置为true，并且进行计算属性方法调用。
   
   + computed所谓的缓存是指什么?
     计算属性是基于他的响应式依赖进行缓存的，只有依赖发生改变的时候才会重新求值。
  
    + computed缓存存在的意义 / 什么时候使用 ？
      比如计算属性方法内部操作非常耗时，遍历一个极大的数组，计算一次可能需要1s。
      经常用来做类型转换和数据format
     
    + 下面的计算属性依赖值改变不会触发视图更新。[只有经过data被Observer监听过的数据才可以被计算属性监听到]
      <template>
        {{ xxx }} {{ time }}
      </template>  
      
      computed:{
          xxx(){
              return localStorage.getItem('xxx')
          },
          类似于
          time(){
              return Date.now()
          }
      }

      onClick(){
          localStorage.setItem('xxx',123)
      }

*/
