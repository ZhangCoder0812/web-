import { isPlainObject, jsonToUrlencoded } from "../常用方法封装.js";

(function (params) {
    let inital = {
         url:'',
         params:null,
         jsonpName,'callback',
          success:Func
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