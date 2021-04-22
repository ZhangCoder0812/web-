/* 

 - 从输入URL到显示页面经历的过程：

   + URL解析
   + 缓存检查「强缓存，协商缓存」
   + DNS解析
   + TCP的三次握手
   + HTTP传输「请求，响应」
   + TCP的四次挥手
   + 渲染页面


---- URL解析 ---------------
 http://www.xxx.com:80/index.html?id=1&name=wade#vedio
  
  - 传输协议：HTTP，HTTPS(SSL)，FTP(文件上传：指的是项目部署 服务器上传代码)

  - 域名：顶级域名(baidu.com)，二级域名(www.baidu.com)，三级域名(img.baidu.com)，...
        他们属于不同域名「主域相同，子域不同」

  - 端口：范围0～65535 「区分同一台服务器上不同服务/项目」
        一台服务器可以部署多个项目，客户端向服务器发请求指定端口号找到对应项目，类似本地起项目。
        默认端口：浏览器处理的，不写浏览器默认加上 https://www.baidu.com:443
                HTTP:80，HTTPS:443，FTP21

  - 问号传参：get请求使用 ?/& 将参数拼在路径后面   。
            let str = http://www.baidu.com?id=1&name=韦德&from=http://www.xxx.com
            + 传参中若有中文会导致编码错误 出现乱码
              1. encodeURI/decodeURI 前后端都适用 编译能力较弱 只编译中文/空格等 用于编译整个url
                 encodeURI(str) -> http://www.xxx.com?id=1&name=%E9%9F%A6%E5%BE%B7&from=http://www.xxx.com
              2. encodeURIComponent/decodeURIComponent 前后端都适用 编译能力较强 可以编译一些特俗字符
                 encodeURIComponent(str)  -> ttp%3A%2F%2Fwww.xxx.com%3Fid%3D1%26name%3D%E9%9F%A6%E5%BE%B7%26from%3Dhttp%3A%2F%2Fwww.xxx.com
                 一般这样用 编译指定字段
                 let url = `http://www.baidu.com?id=1&name=${encodeURIComponent('韦德')}&from=${encodeURIComponent('http://www.xxx.com')}`
                 -> "http://www.baidu.com?id=1&name=%E9%9F%A6%E5%BE%B7&from=http%3A%2F%2Fwww.xxx.com"
              3. escape/unescape 只适合客户端之前通信和编码 用户缓存一些cookie带有中文的
                 escape('韦德') -> "%u97E6%u5FB7"
                 unescape('%u97E6%u5FB7') -> "韦德"
            + 传参中若有http...会把这个当作一个新地址，并不会当作一个参数处理

  - 哈希值：#xxx 「用于锚点定位，页面加载完成快速定位到id为xxx的这个元素。哈希路由」


---- 缓存检查 ---------------  
   针对静态资源文件进行缓存检查 如：html/css/js/img...
   缓存位置：内存，硬盘
   普通刷新F5：因为Tab页没关闭 先找内存中的缓存 再找硬盘中的缓存
   强制刷行CTRL+F5：不检测任何缓存 直接向服务器发送请求 因为请求头部会携带 Cache-contra:no-cache
   关闭叶面重新打开：在硬盘中查找

   缓存类型「强缓存/协商缓存」：都不需要我们手动做什么事情，浏览器自动处理。
    - 强缓存
       + 先检查本地是否有缓存，有，且没过期，直接从本地获取，然后渲染「HTTP状态码：200」
       + 如果没有或者过期了 则重新发送请求 把返回的结果再缓存起来   
       优势：性能优化的重点手段，可以保证第二次及以后再访问速度会很快   
       弊端：可能无法保证无法获取的资源不是最新的
          + HTML是不能做强缓存的
          + 只要HTML不做强缓存，就可以保证资源的及时更新，或者路径后面加时间戳哈希值/文件名根据内容
            生成HASH值
    
       服务器设置的强缓存，在每一次重新从服务器获取资源文件时，都在响应头中携带Cache-Control/Expires 缓存
       有效期，客户端浏览器自动把信息缓存起来，包含它的有效期，以后再访问这些资源 先看看本地是否有且是否过期。
    
    - 协商缓存304「只有强缓存失效后，才会进行协商缓存」
        + 若资源文件没有更新过 则返回304，让客户端使用缓存
        + 若更新过，返回新的资源文件，在响应头中携带Last-Modified/ETag，客户端再存储起来。
          Last-Modified当前资源文件在服务器最后修改的时间，Etag 每次修改文件后都会生成一个Etag标志
        + 以后再请求时，同时带上 if-Modify-Since「上次服务器返回的 Last-Modified 的值」 或 
          if-None-Match「上次服务器返回的 ETag 的值」传给服务器，
          服务器根据传递的 时间/标志 和本地的进行对比，如果一样 则表示没有更新过 返回304，无需返回内容。
          如果不一样 则表示更新过 返回200和最新的资源文件及Last-Modified/ETag。
   
   - 数据缓存「ajax/axios/fetch...」






---- HTTP传输 ---------------        
     HTTP报文：请求报文，响应报文。
     HTTP/HTTPS传输协议：就是在建立好的TCP通道之内由HTTP/HTTPS负责把请求/响应信息传来传去，
                       所以说HTTP/HTTPS是传输协议。 

 

  Connection:keep-alive
       从 HTTP/1.1起，默认使用长连接，在响应头有加入 Connection:keep-alive。使用之前建立
       好的通道，Keep-Alive不会永久保持连接，它有一个保持时间，不再次发送请求就会自动关闭。
   
  HTTP的长连接和短连接本质上是TCP长连接和短连接。HTTP属于应用层协议，在传输层使用TCP协议，
  在网络层使用IP协议。 IP协议主要解决网络路由和寻址问题，TCP协议主要解决如何在IP层之上可靠
  地传递数据包，使得网络上接收端收到发送端所发出的所有包，并且顺序与发送顺序一致。TCP协议是可
  靠的、面向连接的。
  
  长连接和短连接的优点和缺点:
     - 长连接可以省去较多的TCP建立和关闭的操作，减少浪费，节约时间。对于频繁请求资源的
       客户端适合使用长连接「建立连接——数据传输——关闭连接...建立连接——数据传输——关闭连接」
     - 短连接对于服务器来说管理较为简单，存在的连接都是有用的连接，不需要额外的控制手段。但如果客户请求频繁，
       将在TCP的建立和关闭操作上浪费较多时间和带宽 「建立连接——数据传输...（保持连接）...数据传输——关闭连接」 

  HTTP协议是无状态：
     HTTP协议是无状态的，指的是协议对于事务处理没有记忆能力，服务器不知道客户端是什么状态。也就是说，
     打开一个网页和上一次打开这个的网页之间没有任何联系。HTTP是一个无状态的面向连接
     的协议，无状态不代表HTTP不能保持TCP连接，更不能代表HTTP使用的是UDP协议(无连接）

  看课件    
        

*/
