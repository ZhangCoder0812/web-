/* 

   typeof 返回的结果是一个 字符串
          稳定性和性能好 用起来简单 经常用 但有弊端
   
   typeof 弊端：
         - 检测原始值类型的可以 (null undefined Boolean String Number Symbol)
           但是 typeof null = 'object'
         - 不能准确检测引用数据类型， 除了检测 typeof function = 'function'，其他都是 'object'

   typeof 数据检测底层机制：

        - 所有的数据类型在计算机中都是按照二进制存储[根据IEEE-754规范 使用64位2进制值存储]，
          所有引用数据类型前三位都是000，null前三位也是000，
            整数：以1开始
            浮点数：以010开始
            字符串：以100开始
            布尔：以110开始
            对象：000开始
            undefined：-2^30
            null：00000...

        - typeof 底层机制就是判断这些二进制的值，是以什么开始的。
          如果是以000开始的 都是对象 特殊性：排除函数 看有没有call方法。

        - 所以 typeof null = 'object' 
               typeof 可以检测出函数类型       

*/

typeof 10             // 'number'
typeof NaN            // 'number'
typeof Infinity       //'number'
typeof ''             // 'string'
typeof true           // 'boolean'
typeof null           // 'object'
typeof undefined      // 'undefined'
typeof Symbol()       //'symbol'
typeof 10n            // 'bigint'   
typeof {}             //'object'
typeof []             //'object'
typeof /^$/           //'object'
typeof new Date()     //'object'
typeof function(){}   //'function'
typeof (()=>{})       //'function'
