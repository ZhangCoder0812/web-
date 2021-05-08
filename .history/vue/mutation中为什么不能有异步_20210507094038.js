/* 


Vuex中所有的状态更新的唯一途径都是mutation，异步操作通过 Action 来提交 mutation实现，
这样使得我们可以方便地跟踪每一个状态的变化。

如果mutation支持异步操作，就没有办法知道状态是何时更新的，无法很好的进行状态的追踪，
给调试带来困难。

action中可以有异步 最终走到mutation中是同步的 相当于mutation是一个总阀门 只要
跟新数据都走这。
 

总结：有机可寻 可控制  



 
*/