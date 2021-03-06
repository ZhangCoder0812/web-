
#  URL解析 ---------------
    http://www.xxx.com:80/index.html?id=1&name=wade#vedio
  
  - 传输协议：HTTP，HTTPS(SSL)，FTP(文件上传：指的是项目部署 服务器上传代码)

  - 域名：顶级域名(baidu.com)，二级域名(www.baidu.com)，三级域名(img.baidu.com)，...
        他们属于不同域名「主域相同，子域不同」

  - 端口：范围0～65535 「区分同一台服务器上不同服务/项目」
         一台服务器可以部署多个项目，客户端向服务器发请求指定端口号找到对应项目，类似本地起项目。
         默认端口：浏览器处理的，不写浏览器默认加上 https://www.baidu.com:443
                  HTTP:80，HTTPS:443，FTP21

  - 问号传参：get请求使用 ?/& 将参数拼在路径后面 
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