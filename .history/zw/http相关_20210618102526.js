/* 

 1. 解决跨域问题
  
     jsonp 
     cors
     node 正向代理 请求api 代理到自己的服务器上请求 结果再返给前端 
     nginx 反向代理 proxy_pass 转发 

 2. 全局请求处理? 统一处理登录态 统一处理全局错误
 
    axios  adaptar / 拦截器 interceptor

 3. 代码题 你能给xhr 添加hooks 实现在各个阶段打日志么？
       
     
*/

class XhrHook{

}

new XhrHook({
    open:function(){
        console.log('open')
    },
    onload:function(){
        console.log('onload')
    },
    open:function(){
        console.log('open')
    },
    open:function(){
        console.log('open')
    }
})