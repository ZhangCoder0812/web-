import { isPlainObject, jsonToUrlencoded } from "../常用方法封装.js";

(function (params) {
    let inital = {
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
    function jsonp(config) {

        if (!isPlainObject(config)) config = {};
        // 处理headers  header是个对象
        if (config.headers) {
            if (!isPlainObject(config.headers)) headers = {};
            config.headers = Object.assign({}, inital.headers, config.headers);
        }

    }
    if (typeof window !== 'undefined') window.jsonp = jsonp
    if (typeof module === 'object' && typeof module.exports === 'object') module.exports = jsonp
})()