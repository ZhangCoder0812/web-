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

- Push Cache
    1. 推送缓存 是 HTTP/2 中的内容，当以上三种缓存都没有命中时，它才会被使用
    2. 它只在会话（Session）中存在，一旦会话结束就被释放，并且缓存时间也很短暂


- 为了性能上的考虑，大部分的接口都应该选择好缓存策略，通常浏览器缓存策略分为两种：
  强缓存和协商缓存，并且缓存策略都是通过设置 HTTP Header 来实现的。


- 缓存过程分析
    1. 浏览器与服务器通信的方式为应答模式，即 浏览器发起HTTP请求 – 服务器响应该请求
    2. 

*/