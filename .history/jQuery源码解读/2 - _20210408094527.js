 

(function (global, factory) {
    // global 可能是window(浏览器/webview/webpack ) 或 global(node环境)
    // 判断是否支持 commonJs 规范
    if (typeof module === "object" && typeof module.exports === "object") {
      /* 
        可能是 node/webpack 环境
        global.document 
          - 有值,说明当前环境是 webpack，因为webpack中有window ,window.document有值
          - 没有值,说明是node环境，因为global中没有document，所以node中运行jQuery不传
            window会报错
      */
      module.exports = global.document
        ? factory(global, true)
        : function (w) {
          if (!w.document) {
            throw new Error("jQuery requires a window with a document");
          }
          return factory(w);
        };
    } else {
      // 可能是 浏览器/webview 环境
      factory(global);
    }
  })(
    // 判断当前环境是 浏览器/webview/webpack  还是  node 环境
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
  