import { isPlainObject, jsonToUrl } from "../常用方法封装.js";

(function () {
    let inital = {
        url: '',
        params: null,
        jsonpName: 'callback',
        success: Function.prototype
    };
    function jsonp(config) {
        if (url === '' || typeof url !== "string") throw new TypeError("url must be an noEmprty string ");
        if (!isPlainObject(config)) config = {};
        let {
            url,
            params,
            jsonpName,
            success
        } = Object.assign({}, inital, config);

        // 处理params
        if (params != null) {
            if (isPlainObject(params)) params = jsonToUrl(params)
            url += `${url.includes("?") ? "&" : "?"}${params}`;
        }

        // 创建全局函数
        let f_name = `jsonp${+new Date}`;//加时间戳避免与其他函数重名
        window[f_name] = function (res) {
            if (typeof success === 'function') success(res);
            // 成功之后销毁全局函数和script标签
            // delete window[f_name];
            // document.body.removeChild(script)
        }

        // url拼接回调函数
        url += `${url.includes("?") ? "&" : "?"}${jsonpName}=${f_name}`;

        // 创建script标签 发送jsonp请求
        let script = document.createElement('script')
        script.src = url
        script.onerror = function () { } // jsonp请求失败的处理
        document.body.appendChild(script)

    }
    if (typeof window !== 'undefined') window.jsonp = jsonp
    if (typeof module === 'object' && typeof module.exports === 'object') module.exports = jsonp
})()

console.log(123)