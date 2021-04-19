/* 
   ajax，axios，$ajax，fetch 的区别？
     - 都是基于TCP(HTTP/HTTPS)从服务器获取数据
     - ajax，axios，$ajax 核心是XMLHTTPRequest
       fetch 是es6新增的Api，浏览器新提供的一种和服务器通信的机制
     - ajax是原生api操作
       axios是基于promise封装的ajax库

  ajax：async javascript and xml
       异步的js指的不是js异步编程，指的是页面局部刷新。
    
    作用：实现 数据请求+客户端渲染 达到局部刷行  
    
    早期基于xml「可扩展的标记语言」的数据格式和服务器进行交互，
    使用起来不太方便，现在改为json「ajaj」 

    核心：- 基于 XMLHttpRequest 浏览器提供的内置类 创建http请求
           创建一个xhr实例

        - open(method,url,async,...)
            + 打开一个URL地址「发送请求前的一些配置信息」
            + 请求的地址 
                get方式参数拼在地址中  xhr.open("get", "./data.json?name=xxx&password=123456")
                post方式参数在请求头中 xhr.send('name=xxx&password=123456');
                1. get传参数数量没有post多，因为url有长度限制，超过会被自动截取掉，post理论上没有限制，但是
                   传的越多 请求速度越慢 导致请求/传输超时。
                2. get会产生缓存「浏览器默认产生 不可控的缓存」，两次及以上 请求相同的地址 且参数也相同，浏览器
                   可能会把第一次的请求结果返回。
                   解决缓存：添加随机数 "./data.json&_"+Matn.Random()
                3. post比get更安全，get把参数放在url上会被劫持，post放在请求体中 相对比较安全，但是
                   '互联网面前，人人都在裸奔'，所以不管什么请求方式，设计安全方面 都需要加密处理。   
            + 是否采用异步 默认true 使用异步
            + username 有些服务器要求用户名/密码才能请求
            + userpass 

        - onreadystatechange 「监听请求过程 在不同阶段做不同处理 包含服务器响应结果」    
              + xhr.readyState 「ajax的状态」：
                  0 UNSENT 未发送请求
                  1 OPENED 已经发送
                  2 HEADERS_RECEIVED 响应头信息已经返回 「头比主体信息先返回 所以获取响应头在2就可以获取到了」
                  3 LOADING 响应结果正在处理
                  4 DONE 响应结果已经返回
              + xhr.status 「http状态码」：
                  200 OK
                  202 Accepted 服务器已接受请求 但尚未处理
                  204 No Content 服务器成功处理了请求 但不需要返回任何实体的内容
                     「请求方式head时 只获取响应头信息 不需要服务器返回其他内容」
                  206 用于断点续传 「使用这个实现特别麻烦 需要指定许多头控制上传范围」
                  301 永久转移/移动/重定向 ，360buy.com->jd.com 用于域名迁移
                  302 临时转移/移动/重定向 ，用于负载均衡 「也有可能返回200 获取到数据了 看后台设置」
                  304 使用缓存
                  305 使用代理  
                  400 Bad Request 请求头/参数有误
                  401 Unauthorized 没有权限
                  403 Forbidden 禁止访问
                  404 Not Found 找不到
                  405 Method Not Allowed 请求方式不被允许 
                  408 Request Timeout 请求超时
                  500 Service Unavailable 服务器错误
                  503 Service Unavailable 超负荷
                  505 HTTP Version Not Supported 当前http版本不支持
                  ... 2，3开头都成功， 4开头客服端问题，5开头服务器问题
              + xhr.response/responseText/responseXMl...  获取响应结果
                   服务器返回的主体信息格式：
                     1. 字符串「一般是json字符串」
                     2. xml格式数据
                     3. 文件流格式数据「buffer/二进制...」
              + xhr.getResponseHeader/getAllResponseHeaders  获取响应头信息   

        - send 发送请求 ,参数为post方式传递的数据
            常见客户端/服务器交互数据格式 设置mime：
               1. form-data 数据格式「不是二进制」，用于文件上传/表单提交
                    xhr.setRequestHeader('Content-Type','multipart/form-data')
                    let fd = new FormData;
                    fd.append('name','wade')
                    fd.append('age',10)
                    xhr.send(fd)
               2. x-www-form-urlencoded 格式字符串
                    格式："name=xxx&password=123456"   
                    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
               3. raw 字符串格式
                    Text 普通字符串  xhr.setRequestHeader('Content-Type','text/plain')
                    Json json字符串 xhr.setRequestHeader('Content-Type','application/json')
                    XML  xml字符串  xhr.setRequestHeader('Content-Type','application/xml')
                    ...
               4. binary 进制数据格式「buffer/二进制」 用于文件上传  
                  设置的请求头跟上传的文件类型有关
                  xhr.setRequestHeader('Content-Type','application/image/jepg/...') 
               5. GraphQL    
                       
*/

let xhr = new XMLHttpRequest();
xhr.open("get", "./data.json");
xhr.setRequestHeader("Content-Type", "text/plain"); // 设置请求头信息必须在 open 之后 send 之前
xhr.setRequestHeader("token", "xxxxx"); // 请求头中也可以传数据 但不允许出现中文
xhr.onreadystatechange = function () {
  if (xhr.readyState === 2) {
    // 头比主体信息先返回 所以获取响应头在2就可以获取到了
    console.log(xhr.getAllResponseHeaders());
    console.log(xhr.getResponseHeader("Date"));
    console.log(xhr.getResponseHeader("Content-Type"));
  }
  if (xhr.readyState === 4 && xhr.status == 200) {
    console.log(xhr.responseText);
  }
};
xhr.send(null);
// xhr.withCredentials 默认false 是否允许携带资源凭证 跨域用得到
/* 

  onload 请求成功 响应结果已经返回 http状态吗不一定是200
  onerror 信息没有返回 可能是断网了
  onreadystatechange  可以把控请求的各个阶段 具体去做处理


  xhr.open("get", "/userInfo?id=1");  正常传参数
  xhr.open("get", "/userInfo/1");   也有这种方式 但是很少用 需要后台配合使用 这就变成了一个单独的url


  面试题：xhr有多少个方法？ 7 个
     
        abort
        getAllResponseHeaders
        getResponseHeader
        open
        overrideMimeType
        send
        setRequestHeader
    -----------
        onabort 中断请求触发 「abort中断请求」
        onerror 
        onload 
        onloadend 
        onloadstart 
        onprogress 
        onreadystatechange 
        ontimeout 请求超时触发「timeout设置超时时间 」
        upload.onprogress 监听文件上传进度
        ...




*/

 
