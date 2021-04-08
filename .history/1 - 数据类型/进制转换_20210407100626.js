/* 

  2进制 0~1
  8进制 0~7
  10进制 0~9
  16进制 0~9 A~F

*/


/*

- 10 进制转为2进制：除以2 直到商为0 将余数从后往前组合起来就是2进制数

    45 => 45/2 商22 余1
       => 22/2 商11 余0
       => 11/2 商5  余1
       => 5/2  商2  余1
       => 2/2  商1  余0
       => 1/2  商0  余1

    结果： 101101
 


- 其他值转为10进制：n*radix**index 小数点后面为负次幂

   + 8进制 123.45 转为 10进制：
      3*8**0 + 2*8**1 + 1*8**2 + 4*8**-1 +4*8**-2 = 83.5625
  
   + 16进制 0x0BAF3 转为 10进制：(以 0x 开始默认值16进制)
      3*16**0 + 15*16**1 + 10*16**2 + 11*16**3 + 0*16**4 = 47859

*/