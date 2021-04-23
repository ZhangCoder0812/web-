 /* 

  注意：== 比较 只有两边类型不一样才会进行隐私转换，类型一样直接比较

  1. 对象==字符串 ，对象调用valueOf/toString转化为字符串 在比较
     对象 == 对象 ， 比较对象是不是同一个对象，对于引用类型的数据，比较的是地址，而不是真实的值
     其余情况都转化为数字比较 用Number() 转化 要清除Number() 的转化规则

  2. 两边有表达式 先计算表达式

  特殊：
    1. null == undefined , true 
    2. 相等比较之前 不能将 null undefined 转化为任何值。四则运算会转化
       这就是为什么 null==0 -> false 
    3. NaN == NaN  , false , NaN和任何数都不相等
 
    
    有表达式先算表达式
    {} == !{} , false
      => {} == false
      => {} == 0  , 关键在于  {}.toString() 返回字符串 '[object Object]'
      => '[object Object]' == 0
      => 1 == 0 
    
     {} == {} false 比较地址   

     ![]==false -> true
      先算表达式 false==false  true 类型一样不用再转换了 

     []==false -> true
      类型不一样 隐私转换 ''==0 => 0==0 true

 */
