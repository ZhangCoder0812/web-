/* 

  跨域(非同源策略)请求的处理。

  服务器渲染利于SEO优化，网页检查源代码可以看到数据
  客户端渲染不利于SEO优化，网页检查源代码看不到数据

  半服务器渲染SSR[首屏渲染]

  前端发展到现在，基本上都是跨域请求的，无论是开发的时候还是上线的时候。
  部分项目开发的时候是跨域的，本地开发调用的是后台服务器的数据，但上线
  之后会部署在同一服务器下属于同源，就不会跨域了。

*/

/* 

 1. 修改本地host文件
    https://www.xxx.com:443 -> http://127.0.0.1:5500

    只适合本地开发解决跨域，上线后还是不行。
    
 
*/