/* 

  2进制 0~1
  8进制 0~7
  10进制 0~9
  16进制 0~9 A~F

*/


/*

- 10 进制转为2进制

    整数：除以2 直到商为0 将余数从后往前组合起来就是2进制数
        45 => 45/2 商22 余1
           => 22/2 商11 余0
           => 11/2 商5  余1
           => 5/2  商2  余1
           => 2/2  商1  余0
           => 1/2  商0  余1
        结果： 101101
    
    小数：乘以2 取整数部分。有可能变成无线循环数
         0.1 => 0.1*2 -> 0.2 整数部分0
             => 0.2*2 -> 0.4 整数部分0    
             => 0.4*2 -> 0.8 整数部分0
             => 0.8*2 -> 1.6 整数部分1     
             => 0.6*2 -> 1.2 整数部分1  取结果的小数部分乘以2   
                        ----- 开始循环 ---------
             => 0.2*2 -> 0.4 整数部分0    
             => 0.4*2 -> 0.8 整数部分0
             => 0.8*2 -> 1.6 整数部分1     
             => 0.6*2 -> 1.2 整数部分1  
             ...
         结果：0.000110011...       

(0.1).toString(2) 转化为2进制 控制台输出 "0.0001100110011001100110011001100110011001100110011001101"
看上去不是循环下去的，那是因为浏览器自动截断了 js有最大最小安全数。
所以 0.1+0.2 !== 0.3
因为 0.1 0.2 的二进制都是经过省略的 相加得到的结果也是省略之后的 存在精度差。
  0.1 + 0.2 = 0.30000000000000004
但是有的数相加不会存在精度差 如：0.1+0.3 = 0.4 恰好相加完之后结果省略刚好为0.4


- 其他值转为10进制：n*radix**index 小数点后面为负次幂

   + 8进制 123.45 转为 10进制：
      3*8**0 + 2*8**1 + 1*8**2 + 4*8**-1 +4*8**-2 = 83.5625
  
   + 16进制 0x0BAF3 转为 10进制：(以 0x 开始默认值16进制)
      3*16**0 + 15*16**1 + 10*16**2 + 11*16**3 + 0*16**4 = 47859

*/