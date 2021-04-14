/* 

  进程 和 线程 ：
     
    进程； 一般是指一个运行的程序「如：浏览器打开一个页面，就是开辟一个进程」
    线程：进程中具体干事的东西，如果一个进程中同时做多件事情，需要开辟多个线程
       「进程包含一到多个线程」
    
    浏览器中常见线程「浏览器是多线程的」：
      - GUI渲染线程：渲染页面，加载和识别HTML/CSS代码最后渲染出页面
      - JS引擎线程：解析执行JS
      - 事件触发线程：设置一个事件绑定，事件触发线程监听DOM的操作，控制事件是否触发，绑定的方法是否执行   
      - 定时触发器线程：设置一个定时器，定时触发器线程去监听，到最后执行相应方法              
      - 异步HTTP请求线程：页面中从服务器请求资源文件信息或基于ajax请求数据都是用HTTP请求线程处理
      - Web Worker：可以手动开辟线程

    JS是单线程的：因为浏览器只分配一个线程去解析执行JS代码
    
    同步编程：上一个任务/上一段代码没有执行完，下一个任务/下一段代码是不能执行的，同时只能做一件事。
            如：死循环会让后面代码执行不了，死循环一直结束不了任务。
    
    异步编程：「单线程异步编程」    
       - EventQueue：事件队列「存放等待执行的任务」
       - WebApi：监听区域「监听哪些任务可以执行」
       - EventLoop：事件轮询机制    
       
       - 宏任务：
            setTimeout/setInterval 定时器
            事件绑定
            ajax/axios/fetch
            MessageChannel
            setImmedia「node」

       - 微任务：
            requestAnimationFrame
            Promise.then/catch/finally
            async/await
            queueMicrotask「用于创建一个微任务」
            MutationObserver「监听DOM的改变」
            IntersectionObserver「监听元素与当前视口交叉信息 可用于实现图片延迟加载」
            process.nextTick「node中」
*/

