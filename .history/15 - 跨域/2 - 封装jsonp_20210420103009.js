(function (params) {
    function jsonp(config) {
    
    }
    if(typeof window!=='undefined') window.jsonp = jsonp
    if(typeof module === 'object'&& typeof module.exports==='object') module.exports=jsonp
})()