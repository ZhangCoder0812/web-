/*

 函数式编程：
    函数式编程是编程范式中的一种，是一种典型的编程思想和方法。
    其他的编程范式还包括 面向对象编程，命令式编程 等。

*/

// // 命令式编程，通过调用 const 和 console.log 进行赋值和输出。
// const a = 'hello';
// const b = 'world';
// console.log(a + b);


// // 面向对象编程
// class Code {
//     constructor() {
//         this.a = 'hello'
//         this.b = 'world'
//     }
// }
// let code = new Code()
// console.log(code.a + code.b);


// // 函数式编程 这是简单的函数式编程，通过函数的调用完成程序的功能。
// // 但是一般情况下的函数式编程会更复杂一些，会包含函数的组合。
// function code() {
//     const a = 'hello';
//     const b = 'world';
//     return a + b
// }
// console.log(code());


// new Promise((resolve) => {
//     console.log(0)
//     resolve(Promise.resolve(4))
// }).then((res) => {
//     console.log(res)
// })

// new Promise((resolve) => {
//     console.log(1);
//     resolve()
// }).then(() => {
//     console.log(2)
// }).then(() => {
//     console.log(3)
// }).then(() => {
//     console.log(5)
// }).then(() => {
//     console.log(6)
// })

/*

*/

// new Promise((resolve) => {
//     console.log(0)
//     resolve(Promise.resolve(4))
// }).then(res => {
//     console.log(res)
//     return new Promise((resolve) => {
//         resolve(10)
//     })
// }).then(res => {
//     console.log(res)
// })
// new Promise((resolve) => {
//     console.log(1)
//     resolve()
// }).then(res => {
//     console.log(2)
// }).then(res => {
//     console.log(3)
// }).then(res => {
//     console.log(5)
// }).then(res => {
//     console.log(6)
// }).then(res => {
//     console.log(11)
// })


/*

 HTML语义化的理解：
  
  - 用正确的标签做正确的事情
  - 段落用 p 标签，标题用 h 系列标签，边栏用 aside 标签，主要内容用 main 标签
  - html语义化让页面结构更清晰，更具有可读性，便于团队的开发和维护
  - 有利于搜索引擎解析，爬虫，SEO优化
     
*/

/* 

 顾名思义，Promse.race就是赛跑的意思，
 - Promise.race([p1, p2, p3])里面哪个执行的快，外层就使用哪个结果
 - 参数里面可以是常量，那么结果就是这个常量
 - 参数若为空数组 就不会执行 永远挂起 结果报错

*/

Promise.race = function (promise) {
    let promises = Array.from(promise)
    return new Promise(function (resolve, reject) {
        for (var i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i]).then(data => {
                resolve(data);
            }, err => {
                return reject(err)
            })
        }
    })
}


let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success')
    }, 1000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('failed')
    }, 1500)
})

Promise.race([p1, p2]).then((data) => {
    console.log('data：' + data)
}).catch((error) => {
    console.log('error：' + error)
})

/*


浏览器的缓存机制(Http 的缓存机制)

 - 浏览器的缓存从缓存位置来说分为四种,并且各自有优先级,
   当依次查找缓存都没有命中的时候才会去请求网络资源

     Service Worker
     Memory Cache (内存中的缓存)
     Disk Cache (硬盘中的缓存)
     Push Cache (推送缓存)

- Service Worker
    运行在浏览器背后的独立先线程,一般可以用来实现缓存
    传输协议必须为 HTTPS 因为 Service Worker 中涉及
    到请求拦截，所以必须使用 HTTPS 协议来保障安全

- Memory Cache
    1.内存中的缓存，主要包含的是当前中页面中已经抓取到的资源,
      例如页面上已经下载的样式、脚本、图片等。
    2.读取内存中的数据肯定比磁盘快,内存缓存虽然读取高效，可是
      缓存持续性很短，会随着进程的释放而释放。一旦我们关闭
      Tab 页面，内存中的缓存也就被释放了。
    3.那么既然内存缓存这么高效，我们是不是能让数据都存放在内存中呢？
      这是不可能的。计算机中的内存一定比硬盘容量小得多，操作系统
      需要精打细算内存的使用，所以能让我们使用的内存必然不多。
    4.当我们访问过页面以后，再次刷新页面，可以发现很多数据都来自于 Memory Cache
    5.内存缓存中有一块重要的缓存资源是preloader相关指令（例如<link rel="prefetch">）
     下载的资源。preloader的相关指令已经是页面优化的常见手段之一，它可以一边解析
     js/css文件，一边网络请求下一个资源

- Disk Cache
    1. 硬盘中的缓存，读取速度慢点，但是什么都能存储到磁盘中，
       比之 Memory Cache 胜在容量和存储时效性上
    2. 它会根据 HTTP Herder 中的字段判断哪些资源需要缓存，
       哪些资源可以不请求直接使用，哪些资源已经过期需要重新请求。
       并且即使在跨站点的情况下，相同地址的资源一旦被硬盘缓存下来
       ，就不会再次去请求数据
    3. 大文件 或 系统内存使用率高的话，文件优先存储进硬盘
    4. 绝大部分的缓存都来自 Disk Cache

-     

*/