 

(function (global, factory) {
 
    if (typeof module === "object" && typeof module.exports === "object") {
      
      module.exports = global.document
        ? factory(global, true)
        : function (w) {
          if (!w.document) {
            throw new Error("jQuery requires a window with a document");
          }
          return factory(w);
        };
    } else {
     
      factory(global);
    }
  })(
     typeof window !== "undefined" ? window : this,
    function (window, noGlobal) {
     
      var version = "3.6.0",
        jQuery = function () { };
  
       
      var _jQuery = window.jQuery,  
      jQuery.noConflict = function (deep) {
        if (window.$ === jQuery) {
          window.$ = _$;
        }
        if (deep && window.jQuery === jQuery) {
          window.jQuery = _jQuery;
        }
        return jQuery;
      };
  
      // 暴露API 浏览器/webview环境
      if (typeof noGlobal === "undefined") {
        window.jQuery = window.$ = jQuery;
      }
      return jQuery; // 供上面module.exports接收 支持commonJs规范
    }
  );
  