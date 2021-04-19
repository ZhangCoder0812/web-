/* 
    http://www.axios-js.com/zh-cn/docs/   

    axios：是一个基于promise封装的ajax库，核心还是XMLHttpRequest，结果都是一个promise实例。

          常用方法/属性
            + CancelToken 用于取消请求
            + all 实现ajax并行「基于Promise.all实现」所有的请求都成功 才会返回一个成功的promise实例
            + spread 解析基于all返回的结果
            + create 创建axios的一个实例 
            + defaults 全局默认配置
            + get/post/head/options/delete/put/patch 发送对应方式的请求 
            + request 发送请求
            + interceptors 拦截器 「request请求拦截器/response响应拦截器」
             
         
  
  */
let formData = new FormData();
formData.append("name", "xxx");
axios({
  baseURL: "http://127.0.0.1:5500",
  url: "/data.json", // 最终的请求地址为 baseURL+url，如果url中包含了http/https://...则baseURL不生效
  method: "post",
  params: {
    // get传参使用，会把参数拼在url中，http://127.0.0.1:5500/data.json?id=1
    // post 请求有这个字段也会拼接 但是会报错
    id: 1,
  },
  /* get传参的时候内部会调用这个方法拼接params
  paramsSerializer(params){
    console.log(params)
  },
  */
  // post请求使用 传递参数 也可以传递formdata格式数据 data:formData
  data: {
    id: 2,
  },
  // 可以对post的传递数据格式进行修改 但是好像返回json对象不可以
  transformRequest(data) {
    //传递的是一个纯粹对象才可以转化为 urlencoded 格式
    return data;
    return "id=33&name=wade";
  },
  // 设置请求头信息
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    // 针对get请求添加额外参数
    get: {
      age: 12,
    }, // 针对post请求添加额外参数
    post: {
      age: 10,
    },
    // 通用的添加额外参数
    common: {
      name: "wade",
    },
    token: "xxx",
  },
  timeout: 0, //超时时间 (0 表示无超时时间)
  withCre
  responseType: "json", //预设服务器返回格式 无论服务器返回什么格式 都会转化为我们设置的格式
  // 监听上传进度
  onUploadProgress: function (progressEvent) { },
  // 监听下载进度
  onDownloadProgress: function (progressEvent) { },
  // 规定http状态码为多少视为成功
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },
});

//axios.request(config);  配置公共的请求参数
axios
  .get("https://api.sermatec-cloud.com/cloud-auth/getDefaultAgentInfo", {
    params: {
      id: 2,
    },
    validateStatus: function (status) {
      // return status === 1;
      return status >= 200 && status < 300; // default
    },
    //timeout: 1
  })
  .then((response) => {
    console.log("data->", response);
  })
  .catch((err) => {
    console.dir(err);
    console.log("err->", err);
  });

/*

  response 的结果：
     + config 设置的配置项
     + headers 响应头信息
     + request 原生xhr对象
     + status 状态码
     + statusText 状态码的描述
     + data 响应主体信息

  err 的结果：
     + config
     + request
     + toJSON 将错误结果转为json
     + message  错误信息
     + response 如果是网络层失败 是没有response的。可根据这个判断是哪个层面的失败。
     + isAxiosError 是否是axios层面失败

  走then：
     + 服务返回的状态码和validateStatus规定的状态码一致 且 xhr.readStatus === 4

  走catch：
     + 服务返回的状态码和validateStatus规定的状态码不一致
     + 请求超时/被取消
     + 断网


  请求的成功/失败：
     1. 网络层失败，请求没有发送成功 或者 没有任何的响应 「没有完成一个完整的HTTP请求」
     2. axios层失败
        + 服务器一定有返回
        + 服务返回的状态码和validateStatus规定的状态码不一致
        + 超时或取消
     3. 业务层失败
         服务器返回的状态码和项目中自己规定的状态码不一致


  */
