/* 

  10 进制转为2进制：除以2 直到商为0 将余数从后往前组合起来就是2进制数
   
    45 => 45/2 商22 余1 
       => 22/2 商11 余0
       => 11/2 商5  余1
       => 5/2  商2  余1
       => 2/2  商1  余0
       => 1/2  商0  余1

    结果： 101101   


*/