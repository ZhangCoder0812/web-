/* 
    配置公共的URL地址：
     - 如果发送请求的url中包含了http/https://...则baseURL不生效
     - 项目中经常配合webpack根据当前环境让前缀不同：
        + 开发环境 development -> http://127.0.0.1:5500
        + 测试环境 test -> http://192.168.1.123:8080
        + 灰度环境 huidu -> http://huidu.xxx.com 。多台服务器引流 逐渐引流到主服务器上
        + 生产环境 production -> http://www.xxx.com
   
    let env = process.env.NODE_ENV || 'development', // 只有在webpack中可以使用
        baseURL = '';
    switch (env) {
        case 'development':
            baseURL = "http://127.0.0.1:5500"
            break;
        case 'test':
            baseURL = "http://192.168.1.123:8080"
            break;
        case 'huidu':
            baseURL = "http://huidu.xxx.com"
            break;
        case 'production':
            baseURL = "http://www.xxx.com"
            break;
    }
    axios.defaults.baseURL = baseURL    
*/
axios.defaults.baseURL = "http://127.0.0.1:5500"
axios.defaults.timeout = 1

axios.interceptors.request.use(function (config) {
    let token = 'xxx'
    config.headers['Authorization'] = token
    console.log(config)
    return config
})

axios.interceptors.response.use(function (response) {
    console.log('response', response)
    return response
}, function (err) {
    console.log('err', err)
    return err
})


export default axios

/*

  项目上线出现了bug怎么办？
    - 我们有严格的测试把控，首先开发人员内测，再给测试人员测试
    - 看bug严重程度：
       + 一些小的交互体验上的问题。则直接修改再部署上线
       + 如果是严重的bug。则立即回滚到上一个版本

*/

/*
   token作用：验证登录态和权限

   - 传统方式：会话存储
       + 用户请求登录，服务器验证成功后 会设置一个ssession 存储当前
         用户信息，生成一个唯一的connect.sid 返回给客户端[response header中：set-cookie=connect.sid]
       + 客户端遇到set-cookie会把sid信息存储到本地cookie中，且是httpOnly，不允许再修改。
         浏览器自己完成
       + 下次再请求接口时 浏览器会基于请求头中Cookies把sid发送给服务器，服务器再根据sid查找
         之前存储的session信息，如果有就表示合法。
       坏处：服务器重启session会丢失 ，客户端和服务器每一次都要传输cookie 不安全，
            本地cookie存储容易丢失，不利于服务器集群部署[要实现session在不同服务器共享]

   - token方式：实时校验
       + 用户请求登录，服务器验证成功后，根据JWT算法生成一个token信息，并返回格客户端
       + 客户端吧token存储起来，可以存在cookie/sessionStorage/localStorage/vuex...
         下一次请求时客户端再把token带上，服务器再进行校验
       好处：服务器不用储存，重启服务器不会失效，客户端不需要携带资源凭证，稳定，安全
*/