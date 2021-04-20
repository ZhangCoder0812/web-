import { isPlainObject,jsonToUrlencoded } from "../常用方法封装.js";

(function (params) {
    function jsonp(config) {

    }
    if (typeof window !== 'undefined') window.jsonp = jsonp
    if (typeof module === 'object' && typeof module.exports === 'object') module.exports = jsonp
})()