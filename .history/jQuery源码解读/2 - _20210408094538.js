 

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
      /* 
        - 如果是浏览器/webview环境， window->window , noGlobal->undefined
        - 如果是webpack环境， window->window , noGlobal->true
      */
      var version = "3.6.0",
        jQuery = function () { };
  
      // 多库共存 全局暴露变量的冲突解决方案
      var _jQuery = window.jQuery, // 拿到别人的 jQuery 对象
        _$ = window.$; // 拿到别人的$对象时
      //当覆盖别人库中的$对象时，通过执行noConflict方法将$返回，自己在定义变量去接受自己的$对象
      //deep 传true 表示jQuery都可以被还回去
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
  