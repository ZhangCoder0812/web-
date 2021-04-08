/* 

 数据类型检测：

   - typeof 
       返回结果是个字符串 typeof typeof typeof [10,20] => 'string'
       检测基本数据类型可以，特俗：typeof null = 'object' 
       检测引用数据类型 除了 typeof function = 'function' 其余都是 'object'
       
   - instanceof 
       监测当前实例是否属于这个类，并不是数据类型检测，可以依托特点 检测出类型。
       并不可靠 因为原型 prototype 容易被修改。

       let arr = [1, 2]
       console.log(arr instanceof Array) // true
       console.log(arr instanceof Object) // true
       
       function Fn() { }
       Fn.prototype = Array.prototype
       let f = new Fn
       console.log(f instanceof Array) // true

       原理：检测构造函数是否拥有Symbol.hasIns


*/
