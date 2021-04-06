/* 

 作用域：一般理解为变量的作用范围
         分为 全局作用域 ， 函数作用域，块级作用域
         没有局部作用域
    1.全局作用域：        
         - 页面打开时创建，关闭时销毁
         - 声明的变量和函数会被保存到window上
    2.函数作用域：
         - 函数调用时被创建 执行完毕 作用域被销毁
         - 函数没调用一次就会创建一个新的作用域 相互独立 没有影响
         - 函数内可以访问到全局作用域变量 函数外无法访问到函数作用域中的变量
         - 函数作用域中变量查抄先在自身作用域范围内查找 若找不到 逐级向上查找          
   
  函数预编译：
        1. 创建 AO 对象 ，AO{}       
        2. 变量声明 将形参和变量当做AO对象的属性 赋值为undefined
        3. 实参赋值形参
        4. 函数声明+赋值

  全局作用域预编译：
        1. 创建 GO 对象      
        2. 找变量声明 将变量当做GO对象的属性 赋值为undefined
        3. 在函数里面找函数声明 值赋予函数体

  作用域链： AO + GO
        - 会被保存到一个隐式的属性[[scope]]中，这个属性我们是访问不到的，
          但是确实存在，让js引擎访问，里面存储的是作用域链

          函数会保留一个内部属性 [[scope]]  保存了所有的父变量对象
          函数执行时会把AO对象加进去，执行时 先找自己的AO对象 找不到再
          通过这个链向上查找
         


*/

// function fn(a, c) {
//       console.log(a) //  
//       var a = 123
//       console.log(a) //  
//       console.log(c) // 
//       function a() { }
//       if (false) {
//             var d = 678
//       }
//       console.log(d) //  
//       console.log(b) //  
//       var b = function () { }
//       console.log(b) //   
//       function c() { }
//       console.log(c) //  
// }

// fn(1, 2)

// AO = {
//       a: undefined,
//       d: undefined,
//       b: undefined,
//       c: undefined
// }

// function fn(a) {
//       console.log(a)
//       function a() { }
// }
// fn(2)


// function myInterval(fn, wait) {

//       function loop() {
//             fn()
//             setTimeout(loop, wait)
//       }

//       setTimeout(loop, wait)

// }



// function myTimeout(fn, wait) {
//       let i = 0
//       const timer = setInterval(() => {
//             fn()
//             if (i > 0) {
//                   clearInterval(timer)
//             } else {
//                   i++
//             }
//       }, wait);
// }

// myTimeout(() => {
//       console.log(213)
// }, 2000)


// let docs = document.querySelectorAll('*')
// let arr_docs = [...docs] // 转化为类数组
// let tagNames = arr_docs.map(v => v.tagName) // 获取所有标签名
// let result = [...new Set(tagNames)] // 去重 拿到结果
// console.log(result)

// var isValid = function (s) {
//       let len = s.length;
//       if (len % 2 !== 0) return false;
//       let letters = []
//       for (let i = 0; i < s.length; i++) {
//             switch (s[i]) {
//                   case '(':
//                         letters.push(')')
//                         break;
//                   case '[':
//                         letters.push(']')
//                         break;
//                   case '{':
//                         letters.push('}')
//                         break;
//                   default: 
//                         if (!letters.length || letters.pop() !== s[i]) {
//                               return false
//                         }
//             }
//       }
//       return letters.length === 0
// };

var isValid = function (s) {
      while (s.includes('()') || s.includes('[]') || s.includes('{}')) {
            s = s.replace('()', '')
            s = s.replace('[]', '')
            s = s.replace('{}', '')
      }
      return s === ''
};


console.log(isValid('({[(]})'))

