

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
            jQuery = function (selector, context) {
                return new jQuery.fn.init(selector, context) // jQuery类的实例
            };
        jQuery.fn = jQuery.prototype = { // 将 jQuery.fn 和 jQuery.prototype 指向一个对象x
            jquery: version,
            constructor: jQuery, // 原型重定向导致构造函数丢失 手动添加
            length: 0
        };

        var rootjQuery = jQuery(document), // 原生DOM对象
            rquickExpr = rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            init = jQuery.fn.init = function (selector, context, root) {
                var mactch, elem;
                if (!selector) return this; // 没传selector 返回一个空的jQuery对象
                root = root || rootjQuery
                // selector 支持三种不同的类型：字符串，原生DOM对象{浏览器内置方法获取的DOM元素对象}，函数...
                if (typeof selector === 'string') {

                } else if (selector.nodeType) {

                } else if (isFunction(selector)) {
                    return root.ready !== undefined ? root.ready(selector) : selector(jQuery)
                }
                return jQuery.makeArray(selector, this)
            };
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

  $('.box').xxx 把jQuery当做一个函数，jQuery选择器返回的结果是一个jQuery的实例对象，
                也称'jQuery对象'

  $.ajax({ 把jQuery当做一个普通对象 使用其静态的私有方法和属性
      url:'xxx'
      ...
  })

  jQuery 实例对象 $().xxx()
     私有属性、方法
     jQuery.fn 原型上的公共属性，方法
  jQuery当做普通对象，提供静态私有属性，方法
     $.xxx()

*/