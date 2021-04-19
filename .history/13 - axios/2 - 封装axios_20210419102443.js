
axios.defaults.baseURL = "http://127.0.0.1:5500"

/* 
   配置公共的URL地址：
     - 如果发送请求的url中包含了http/https://...则baseURL不生效
     - 项目中经常配合webpack根据当前环境让前缀不同：
        + 开发环境 development
        + 测试环境 
        + 灰度环境
        + 生产环境

*/

export default axios