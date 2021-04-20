import { isPlainObject, jsonToUrlencoded } from "../常用方法封装.js";

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

    }
    if (typeof window !== 'undefined') window.jsonp = jsonp
    if (typeof module === 'object' && typeof module.exports === 'object') module.exports = jsonp
})()