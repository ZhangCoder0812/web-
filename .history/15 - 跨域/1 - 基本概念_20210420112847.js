/*



  服务器渲染利于SEO优化，网页检查源代码可以看到数据
  客户端渲染不利于SEO优化，网页检查源代码看不到数据

  半服务器渲染SSR[首屏渲染]

  前端发展到现在，基本上都是跨域请求的，无论是开发的时候还是上线的时候。
  部分项目开发的时候是跨域的，本地开发调用的是后台服务器的数据，但上线
  之后会部署在同一服务器下属于同源，就不会跨域了。

*/

/*
    跨域(非同源策略)请求的处理。
    协议，域名，端口号 其中一个不同就会跨域


 1. 修改本地host文件
    https://www.xxx.com:443 -> http://127.0.0.1:5500
    访问 https://www.xxx.com:443 会经过DNS查找本地host
    文件找到对应ip ：http://127.0.0.1:5500，实际访问的还是http://127.0.0.1:5500
    这样就欺骗了浏览器达到跨域的效果。

    只适合本地开发解决跨域，上线后还是不行。

 2. JSONP 只能发送get请求
    原理：基于script标签和callbak/cb回调函数，script不会产生跨域，我们引入的第三方库
         也是用script标签引入，cdn引入。需要后台接口处理JSONP格式。

    客户端：callbak/cb 具体名字和后台沟通
        <script src="http://www.xxx.com/list?callbak=getData"></script>
        function getData(res) {
            console.log(res)
        }

    服务器：
        app.get('/list', (req, res) => {
            let { callback = Function.prototype } = req.query;
            let data = [{ id: 1 }, { id: 2 }]
            res.send(`${callback}(${JSON.stringify(data)})`)
        })

 3. cors 在服务端处理请求允许的源，端口，请求方式...等等
      - 在cors处理跨域中，客户端真正发送请求之前，浏览器会先发送一个options请求[试探性请求]，
        目的是验证客户端和服务端是否可以正常通信。

      + 若设置了res.header('Access-Control-Allow-Origin','*') ， 则不允许携带资源凭证.

      + 通常只设定指定的源 res.header('Access-Control-Allow-Origin','http://127.0.0.1:5500')

      + 设置多个源不能连写 ...-Origin','http://127.0.0.1:5500,http://127.0.0.1:8080')
        使用白名单。
         let origin =['http://127.0.0.1:5500','http://127.0.0.1:8080','http://127.0.0.1:300']
         let origin = req.headers.origin || req.headers.refer||''
*/
let whiteList = ['http://127.0.0.1:5500', 'http://127.0.0.1:8080', 'http://127.0.0.1:300']
let origin = req.headers.origin || req.headers.refer || ''
origin = whiteList.includes(origin)
res.header('Access-Control-Allow-Origin',origin)
res.header('Access-Control-Allow-Origin',origin)