/* 
  
  js中的数是十进制的，但是存储到计算机底层及运算的时候 都是先转换为二进制再进行运算的。

  js使用Number类型表示数字(整数和浮点数) 遵循IEEE-754标准，通过64位二进制来表示一个数字
    第0位：符号位 0表示正数 1表示负数 S
    第1位 ~ 第11位：存储指数部分 E
    第12位 ~ 第63位：存储小数部分(即有效数字) F
    注：尾数部分在规约形势下第一位默认为1(省略不写)

   浏览器中有最大最小安全数字：
      Number.MAX_SAFE_INTEGER = 9007199254740991
      即 Math.pow(2,53) - 1 = 9007199254740991 ，Math.pow() 2的53次方

*/

/* 
  解决精准度问题：
     - 转换成整数 扩大系数
     - 第三方库 Math.js decimal.js big.js.....

*/

// 得到小数点后面的位数
function queryDigits(num) {
    num += '' // 转为字符串
    let [, char = ''] = num.split('.')
    return char.length
}

function plus(num1, num2) {
    num1 = +num1 // + 转换为数字
    num2 = +num2
    if (isNaN(num1) || isNaN(num2)) {
        throw new TypeError('num1/num2 must be an number')
    }
    let num1Digits = queryDigits(num1)
    let num2Digits = queryDigits(num2)
    

}