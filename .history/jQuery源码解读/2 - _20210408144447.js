

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
        /* ------------------------------------------------------------------- */
        var version = "3.6.0",
            jQuery = function (selector, contect) {
                return new jQuery.fn.init(selector, contect) // jQuery类的实例
            };
        jQuery.fn = jQuery.prototype = { // 将 jQuery.fn 和 jQuery.prototype 指向一个对象x
            jquery: version,
            constructor: jQuery,
            length: 0
        };

        var rootjQuery = jQuery(document),
            rquickExpr = rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            init = jQuery.fn.init = function () { };
        init.prototype = jQuery.fn // x对象


        /* ------------------------------------------------------------------- */
        var _jQuery = window.jQuery,
            _$ = window.$;
        jQuery.noConflict = function (deep) {
            if (window.$ === jQuery) {
                window.$ = _$;
            }
            if (deep && window.jQuery === jQuery) {
                window.jQuery = _jQuery;
            }
            return jQuery;
        };


        if (typeof noGlobal === "undefined") {
            window.jQuery = window.$ = jQuery;
        }
        return jQuery;
    }
);

/*

  $('.box') 把jQuery当做一个函数

  $.ajax({ 把jQuery当做一个普通对象 使用其静态的私有方法和属性
      url:'xxx'
      ...
  })

*/