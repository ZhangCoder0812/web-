import { isPlainObject,jsonToUrlencoded } from "../常用方法封装.js";

function jsonToUrlencoded(json) {
  return Object.keys(json)
    .map(function (key) {
      // body...
      return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
    })
    .join("&");
}

let baseURL = "http://127.0.0.1:5500",
  // 默认配置项
  inital = {
    body: null,
    credentials: "include",
    cache: "no-cache",
    method: "get",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    // 以下是我们手动加的 不是fetch自带的
    params: null,
    responseType: "json",
  };

const request = function (url, config) {
  if (typeof url !== "string") throw new TypeError("url must be string ");
  if (!isPlainObject(config)) config = {};
  // 处理headers  header是个对象
  if (config.headers) {
    if (!isPlainObject(config.headers)) headers = {};
    config.headers = Object.assign({}, inital.headers, config.headers);
  }
  let {
    method,
    body,
    credentials,
    cache,
    headers,
    params,
    responseType,
  } = Object.assign({}, inital, config);
  // 处理url
  if (!/^http(s?):\/\//i.test(url)) url = baseURL + url; // 传的url没有加baseURL就拼接上
  // 不是null/undefined
  if (params != null) {
    // params传的若是个对象就转为 urlencoded 格式
    if (isPlainObject(params)) params = jsonToUrlencoded(params);
    url += `${url.includes("?") ? "&" : "?"}${params}`;
  }
  // 处理post请求主体信息 根据Content-Type设置body格式
  let isPost = /^(post|put|patch)$/i.test(method),
    conType = headers["Content-Type"] || "application/json";
  if (isPost && isPlainObject(body)) {
    if (/urlencoded/i.test(conType)) body = jsonToUrlencoded(body);
    if (/json/i.test(conType)) body = JSON.stringfy(body);
  }
  // 这里做的是想到于请求拦截器 请求之前做的是
  let token = "xxxx";
  headers["Authorization"] = token;
  // 校验配置项 post请求才有body
  config = {
    method: method.toUpperCase(),
    credentials,
    cache,
    headers,
  };
  if (isPost) config.body = body; // post请求才有body
  // 处理发送请求
  return fetch(url, config)
    .then((respone) => {
      let { status, statusText } = respone;
      if (status >= 200 && status < 400) {
        // 根据responseType返回数据格式
        let result;
        switch (responseType.toUpperCase()) {
          case "JSON":
            result = respone.json();
            break;
          case "TEXT":
            result = respone.text();
            break;
          case "BLOB":
            result = respone.blob();
            break;
          case "ARRAYBUFFER":
            result = respone.arrayBuffer();
            break;
        }
        return result;
      }
      // 服务器有返回信息 状态吗不对 让其走失败 响应拦截
      return Promise.reject({
        code: "STATUS ERROR",
        status,
        statusText,
      });
    })
    .catch((reason) => {
      // 这里面做失败状态下的公共提示和处理 响应拦截
      // 1. 状态码错误
      if (reason && reason.code === "STATUS ERROR") {
        switch (reason.status) {
          case 400:
            // ...
            break;
        }
      }
      // 2.断网
      if (!navigator.onLine) {
        //..
      }
      return Promise.reject(reason);
    });
};

// 使用
request("/data.json", {
  params: {
    id: 2,
    name: "wade",
  },
})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

request("/data.json", {
  method: "post",
  body: {
    id: 3,
    name: "lbj",
  },
})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
