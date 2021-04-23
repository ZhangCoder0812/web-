
#  mutation 和 action 的区别
  
   - mutation 主要用于修改状态 同步执行 
   - action 主要执行业务代码 可以异步 不能直接修改状态。
            A,B 都需要调取同一个接口执行某些操作 可以封装一个action