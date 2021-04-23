
/* 
  
 原始类型：
    number：NaN, Infinity, 正常数字
    string
    boolean
    null ：空
    symbol：唯一值
    undefined ：未定义
    bigInt ：大数

 引用数据类型：
    object 
       - {} plainObject 纯粹对象
       - [] Array 数组 
       - /^$/ RegExp 正则
       - Date 日期
       ...
    
    function 函数类型 (可执行对象) 


  null 是原始类型还是引用数据类型？
   - null是原始数据类型
     虽然 typeof null = 'object' 因为不同的对象在计算机底层
     都表示为二进制，在js中二进制前三位都是0的话就表示对象。
     而null的二进制都是0，就被认为是object。
     所以 typeof null = 'object' 


*/

var str = 'wade'
str[0] = 'k'
console.log(str) // 'wade' 原始值类型不能改变  只能重新赋值