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

、、axios.defaults.baseURL = "http://127.0.0.1:5500"
axios.defaults.timeout = 1000

axios.interceptors.request.use(function (config) {
    let token = 'xxx'
    config.headers['Authorization'] = token
    console.log(config)
    return config
})

export default axios

/*
   token作用：验证登录态和权限
*/

/*

  项目上线出现了bug怎么办？
    - 我们有严格的测试把控，首先开发人员内测，再给测试人员测试
    - 看bug严重程度：
       + 一些小的交互体验上的问题。则直接修改再部署上线
       + 如果是严重的bug。则立即回滚到上一个版本

*/
