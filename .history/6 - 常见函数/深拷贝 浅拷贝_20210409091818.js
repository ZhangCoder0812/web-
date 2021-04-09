/*

  赋值 不是 浅拷贝，区别：
   - 赋值是赋的是栈中的地址
   - 浅拷贝指的是在堆中重新创建内存，拷贝前后的数据基本数据类型不影响，
     基本数据类型拷贝的是基本数据的值，
     引用类型相互影响，因为引用类型拷贝的只是内存地址  
     var obj ={}
     obj 栈 -> {} 堆
   - 深拷贝是将一个对象从内存中完整的拷贝出来，在堆内存中重新开辟一个 
          
  浅拷贝：
      Object.assign()
      ... 扩展运算符
      slice
      contact
      lodash -> clone() 
      
  深拷贝：
     jquery -> extend()
     JSON,parse
     递归

*/
  //深拷贝：拷贝前后的数据无关，改变一个不会影响另一个

        // JSON.parse(JSON.stringify(obj)) 日期,函数,正则,undefined 会有问题 丢失


 