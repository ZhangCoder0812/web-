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

 2. JSONP
    原理：基于script标签和callbak回调函数，script不会产生跨域，我们引入的第三方库
         也是用script标签引入，cdn引入。
    
    客户端：     
        <script src="http://www.xxx.com/list?callbak=fn"></script>
        function fn(data) {
            console.log(data)
        }

    服务器：
        app.get('/list', (req, res) => {
            let { callback = Function.prototype } = req.query;
            let data = [{ id: 1 }, { id: 2 }]
            res.send(`${callback}(${JSON.stringify(data)})`)
        })

*/
