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
    2. 那么浏览器怎么确定一个资源该不该缓存，如何去缓存呢？
       浏览器第一次向服务器发起该请求后拿到请求结果后，将请求结果和缓存标识存入
       浏览器缓存
    3. 浏览器对于缓存的处理是根据第一次请求资源时返回的响应头来确定的

    总结：
    1. 浏览器每次发起请求，都会先在浏览器缓存中查找该请求的结果以及缓存标识
    2. 浏览器每次拿到返回的请求结果都会将该结果和缓存标识存入浏览器缓存中

- 强缓存
    1. 不会向服务器发送请求，直接从缓存中读取资源
    2. 请求返回200的状态码，并且Size显示from disk cache或from memory cache
    3. 通过设置两种 HTTP Header 实现：Expires 和 Cache-Control。

- 协商缓存
    1. 浏览器携带缓存标识发起请求，服务器根据缓存标识决定是否使用缓存
    2. 分以下两种情况
       - 协商缓存生效，返回304和Not Modified
       - 协商缓存失效，返回200和请求结果
    3. 协商缓存可以通过设置两种 HTTP Header 实现：Last-Modified 和 ETag


- 缓存机制
    1. 强制缓存优先于协商缓存进行，若强缓存生效则直接使用缓存，若不生效则进行
       协商缓存，协商缓存由服务器决定是否使用缓存，若协商缓存失效，那么代表该请
       求的缓存失效，返回200，重新返回资源和缓存标识，再存入浏览器缓存中；生效
       则返回304，继续使用缓存
    2. 如果什么缓存策略都没设置，浏览器会采用一个启发式的算法，通常会取响应头中的
       Date 减去 Last-Modified 值的 10% 作为缓存时间


- 使用场景：
    1. 对于频繁变动的资源。首先需要使用Cache-Control: no-cache
       使浏览器每次都请求服务器，然后配合 ETag 或者 Last-Modified
       来验证资源是否有效。这样的做法虽然不能节省请求数量，但是能显著
       减少响应数据大小
    2. 对于不常变化的资源。给它们的 Cache-Control 配置一个很大的
       max-age=31536000 (一年)，这样浏览器之后请求相同的 URL 会命中强
       制缓存。而为了解决更新的问题，就需要在文件名(或者路径)中添加 hash，
       版本号等动态字符，之后更改动态字符，从而达到更改引用 URL 的目的，
       让之前的强制缓存失效 (其实并未立即失效，只是不再使用了而已)

- 用户行为对浏览器缓存的影响
    1. 打开网页，地址栏输入地址： 查找 disk cache 中是否有匹配。
       如有则使用；如没有则发送网络请求
    2. 普通刷新 (F5)：因为 TAB 并没有关闭，因此 memory cache 是
       可用的，会被优先使用(如果匹配的话)。其次才是 disk cache
    3. 强制刷新 (Ctrl + F5)：浏览器不使用缓存，因此发送的请求头部
       均带有 Cache-control: no-cache(为了兼容，还带了 Pragma: no-cache),
       服务器直接返回 200 和最新内容


- Expires：
   1. 缓存过期时间，用来指定资源到期的时间，是服务器端的具体的时间点
      即再次发送请求时，如果客户端的时间小于Expires的值时，直接使用缓存结果。
   2. Expires是HTTP/1.0的字段，现在浏览器的默认使用的是HTTP/1.1，
      Expires已经被Cache-Control替代。
      原因在于Expires控制缓存的原理是使用客户端的时间与服务端返回的时间做对比，
      如果客户端与服务端的时间由于某些原因（时区不同；客户端或服务端时间不准，如果修改了本地时间）
      发生误差，那么强制缓存直接失效，那么强制缓存存在的意义就毫无意义

- Cache-Control
   1. 在HTTP/1.1中，Cache-Control是最重要的规则，主要用于控制网页缓存。比如当
      Cache-Control:max-age=300时，则代表在这个请求正确返回时间（浏览器也会记录下来）
      的5分钟内再次加载资源，就会命中强缓存
   2. 主要取值为：
        public：所有内容都将被缓存（客户端和代理服务器都可缓存）
        private：所有内容只有客户端可以缓存，Cache-Control的默认取值
        no-cache：客户端缓存内容，但是是否使用缓存则需要经过协商缓存来验证决定
        no-store：所有内容都不会被缓存，即不使用强制缓存，也不使用协商缓存
        max-age=xxx (xxx is numeric)：缓存内容将在xxx秒后失效

- Expires和Cache-Control两者对比
   1. 差别不大 ，Expires 是http1.0的产物，Cache-Control是http1.1的产物        
   2. 两者同时存在的话，Cache-Control优先级高于Expires
   3. 在某些不支持HTTP1.1的环境下，Expires就会发挥用处。所以Expires其实是过时的产物
      ，现阶段它的存在只是一种兼容性的写法。
   4. 在无法确定客户端的时间是否与服务端的时间同步的情况下，Cache-Control相比于
      expires是更好的选择，所以同时存在时，只有Cache-Control生效。   

- Last-Modified 和 If-Modified-Since
     1. 服务器响应请求时，返回该资源文件在服务器最后被修改的时间

- If-Modified-Since
     客户端再次发起该请求时，携带上次请求返回的Last-Modified值， 通过此字段值告诉服务器
     该资源上次请求返回的最后被修改时间。服务器收到该请求，发现请求头含有If-Modified-Since
     字段，则会根据If-Modified-Since的字段值与该资源在服务器的最后被修改时间做对比，若服务
     器的资源最后被修改时间大于If-Modified-Since的字段值，则重新返回资源，状态码为200；
     否则则返回304，代表资源无更新，可继续使用缓存文件，   

- ETag 和 If-None-Match
     1. Etag是服务器响应请求时，返回当前资源文件的一个唯一标识(由服务器生成)，只要资源有变化，
        Etag就会重新生成     
     2. 浏览器在下一次加载资源向服务器发送请求时，会将上一次返回的Etag值放到request header
        里的If-None-Match里，服务器只需要比较客户端传来的If-None-Match跟自己服务器上该资源的
        ETag是否一致，就能很好地判断资源相对客户端而言是否被修改过了
     3. 如果服务器发现ETag匹配不上，那么直接以常规GET 200回包形式将新的资源（当然也包括了新的ETag）
        发给客户端；如果ETag是一致的，则直接返回304知会客户端直接使用本地缓存即可  


*/