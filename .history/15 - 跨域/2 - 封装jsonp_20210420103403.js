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
        if (typeof url !== "string") throw new TypeError("url must be string ");
        if (!isPlainObject(config)) config = {};
        let {
            url,
            params,
            jsonpName,
            success
        } = Object.assign({}, inital, config);

    }
    if (typeof window !== 'undefined') window.jsonp = jsonp
    if (typeof module === 'object' && typeof module.exports === 'object') module.exports = jsonp
})()