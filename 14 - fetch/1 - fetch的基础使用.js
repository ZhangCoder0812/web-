/* 
  
  fetch还不太成熟：
    - get传参要自己手动拼接，没有params字段.
    - 没有设置超时时候/中断请求/... 等等

   只要服务器返回结果，无论状态码是多少 fetch都认为是成功的，都会走到then里面
   服务器没有返回信息/超时/断网 会走到catch
   可以自己判断状态码去规定成功失败

*/

fetch("http://127.0.0.1:5500/data.json?id=1", {
  method: "get",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  cache: "no-cache", //不使用缓存
  credentials: "include", //是否携带资源凭证 'same-origin'同源下允许，'omit'都不允许，'include' 同域/跨域都允许
})
  .then((response) => {
    console.log("response->", response);
    // response.prototype 上有json()/text()/blob()/...等方法 可以把响应结果变成想要的格式 执行这些方法返回对应的promise实例
    // 判断状态码去规定成功失败
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    }
    return Promise.reject({
      code: "error",
      status: response.status,
      statusText: response.statusText,
    });

    console.log("---------------------");
    // response.headers.values() ->Itersator 对象
    // 获取响应头信息
    response.headers.forEach((value, key) => {
      console.log(key, ":", value);
    });
    // 获取headers中的key
    let it = response.headers.keys();
    for (let val of it) {
      console.log(val);
    }
    // 获取headers中指定的字段
    console.log(response.headers.get("Content-Type"));
    console.log("---------------------");
  })
  .then((data) => {
    console.log(data); // 响应主体信息
  })
  .catch((errResponse) => {
    console.log("errResponse->", errResponse);
  });

fetch("http://127.0.0.1:5500/data.json", {
  method: "post",
  // post传参要用body且不能直接传对象，直接写对象默认会把这个对象变成字符串 就会变成[object Object]
  // 设置请求头 "Content-Type": "application-json", 也不行
  body: JSON.stringify({ id: 1, name: "wde" }),

  headers: {
    "Content-Type": "application-json",
  },
})
  .then((response) => {
    console.log("response->", response);
  })
  .catch((errResponse) => {
    console.log("errResponse->", errResponse);
  });
