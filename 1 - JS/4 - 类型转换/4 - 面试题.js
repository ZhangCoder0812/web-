
let res = 100 + true + 21.2 + null + undefined + 'Tencent' + [] + null + 9 + false
console.log(res) // NaNTencentnull9false 
/*

  转化为数字 系统默认用  Number()
 'Tencent' 之后都是转化为字符串

 重点在 Number(undefined)=>NaN
 
 1. undefined 之前是相加都是数字 然后+undefined 变成 NaN, 数字+NaN = NaN
 2. NaN + 字符串 变成字符串拼接  
 3. 字符串+ 任何数 都要转为字符串在拼接

*/

/*
    var a = ?
    if (a == 1 && a == 2 && a == 3) {
      console.log('ok')
    } 
*/
var a = {
  i: 0,
  toString() {
    return ++this.i
  }  
}

var a = [1, 2, 3]
a.toString = a.shift

let i = 0
Object.defineProperty(window, 'a', {
  get() {
    return ++i
  }
})

