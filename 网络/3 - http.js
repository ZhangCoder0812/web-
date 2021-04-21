/* 

  HTTP0.9「1991」/ HTTP1.0「1996」/ HTTP1.1「1999」/ HTTP2.0「2015」

  HTTP1.0 和 HTTP1.1 的区别
     + 缓存处理： 
            HTTP1.0 强缓存：Expires  协商缓存：Last-Modified if-Modified-Since
            HTTP1.1 强缓存：Cache-Control  协商缓存：If-None-Match Etag 
     + 长连接，HTTP1.1中默认开启Connection:keep-alive，一定程度上弥补了HTTP1.0每次请求都要创建连接的缺点       
     + 带宽优化/网络连接使用：HTTP1.1 支持断点续传，返回状态码206(Partial Content)
     + 错误通知的管理：HTTP1.1新增来多种状态码 如：409，410...
     + Host头处理：在HTTP1.0中认为每台服务器都绑定一个唯一的IP地址，因此，请求消息中的URL并没有传递主机名（hostname）,
                 但随着虚拟主机技术的发展，在一台物理服务器上可以存在多个虚拟主机（Multi-homed Web Servers），并且
                 它们共享一个IP地址。HTTP1.1的请求消息和响应消息都应支持Host头域，且请求消息中如果没有Host头域会报告
                 一个错误（400 Bad Request）

      
  HTTP2.0 比 HTTP1.x 新增特性：
      + 新的二进制格式（Binary Format）：
            HTTP1.x的解析是基于文本，基于文本协议的格式解析存在天然缺陷，文本的表现形式有多样性，要做到健壮性考虑的场景
            必然很多，二进制则不同，只认0和1的组合，基于这种考虑HTTP2.0的协议解析决定采用二进制格式，实现方便且健壮。
      + header压缩：
           HTTP1.x的header带有大量信息，而且每次都要重复发送，HTTP2.0使用encoder来减少需要传输的header大小，通讯双
           方各自cache一份header fields表，既避免了重复header的传输，又减小了需要传输的大小      
      + 服务器主动推送（server push）：
           客户端请求html文件的同时，会把html中加载的css/js文件同时推送给客户端，当客户端再次获取对应css/js时候 
           就可以直接从缓存中获取到，不用再发请求了.
           // 通过在应用生成HTTP响应头信息中设置Link命令
           Link: </styles.css>; rel=preload; as=style, </example.png>; rel=preload; as=image        
      + 多路复用（MultiPlexing）：HTTP同源并发请求有数量限制，请求通道数量有限
         - HTTP/1.0  每次请求响应，建立一个TCP连接，用完关闭
         - HTTP/1.1  即使是长连接，也是若干个请求排队串行化单线程处理，后面的请求等待前面请求的返回才能获得执行机会，
                     一旦有某请求超时等，后续请求只能被阻塞，毫无办法，也就是人们常说的线头阻塞；
         - HTTP/2.0 「多路复用」多个请求可同时在一个连接上并行执行，某个请求任务耗时严重，不会影响到其它连接的正常执行；         
          


*/