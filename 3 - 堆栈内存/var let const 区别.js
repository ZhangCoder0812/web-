/*

   var/let/const 区别：
     - 变量提升。var存在变量提升，let/consnt 不存在变量提升
     - 重复声明。相同上上下文中 var可以重复声明一个变量 let/const不能重复声明
     - var定义的变量存在GO中 let/const 定义的变量存在VO中
     - 块级上下文。除对象和函数的大括号外，如果出现let/const/function则会产生块级上下文
                  var不会产生块级上下文，也不会块级上下下文的影响。
                  var n = 10
                  let m = 20
                  {
                    var n = 30
                    let m = 40
                    console.log(n,m) // 30 40
                  }
                  console.log(n,m) // 30 20
     - 暂时性死区问题。let/const 可以消除暂时性死区问题


*/


for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i) // 5个5
    }, 0)
}

// 解决
// 方式一：使用let 产生5个私有上下文
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i) // 0 1 2 3 4 
    }, 0)
}

// 方式二
for (let i = 0; i < 5; i++) {
    (function (i) {
        setTimeout(() => {
            console.log(i) // 0 1 2 3 4 
        }, 0)
    })(i)
}

// 方式三 使用第三个参数 内部也是按照闭包的形式处理的
for (var i = 0; i < 5; i++) {
    setTimeout((i) => {
        console.log(i) // 0 1 2 3 4 
    }, 0, i)
}

// 方式四  使用bind 预先将i存起来
for (var i = 0; i < 5; i++) {
    let fn = function (i) {
        console.log(i)
    }
    setTimeout(fn.bind(null, i), 0)
}