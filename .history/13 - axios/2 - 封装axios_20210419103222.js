
/* 
   配置公共的URL地址：
     - 如果发送请求的url中包含了http/https://...则baseURL不生效
     - 项目中经常配合webpack根据当前环境让前缀不同：
        + 开发环境 development -> http://127.0.0.1:5500
        + 测试环境 test -> http://192.168.1.123:8080
        + 灰度环境 huidu -> http://huidu.xxx.com
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


export default axios


/* 
  
  项目上线出现了bug怎么办？
    - 我们有严格的测试把控，首先开发人员内测，再给测试人员测试
    - git回滚到上一个版本
    - 看bug严重程度：
       + 一些小的交互体验上的问题

*/