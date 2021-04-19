
/* 
   配置公共的URL地址：
     - 如果发送请求的url中包含了http/https://...则baseURL不生效
     - 项目中经常配合webpack根据当前环境让前缀不同：
        + 开发环境 development -> http://127.0.0.1:5500
        + 测试环境 test -> http://192.168.1.123:8080
        + 灰度环境 huidu -> http://huidu.xxx.com
        + 生产环境 production -> http://www.xxx.com
*/
let baseURL = ''
const env = process.env.NODE_ENV || 'development'
switch (env) {
    case 'development':
        baseURL = "http://127.0.0.1:5500"
        break;
    case 'development':
        baseURL = "http://127.0.0.1:5500"
        break;
    case 'development':
        baseURL = "http://127.0.0.1:5500"
        break;
    case 'development':
        baseURL = "http://127.0.0.1:5500"
        break;
}

axios.defaults.baseURL = "http://127.0.0.1:5500"


export default axios