

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
        jQuery.fn = jQuery.prototype = { // 将 jQuery.fn 和 jQuery.prototype 原型重定向
            jquery: version,
            constructor: jQuery, // 原型重定向导致构造函数丢失 手动添加
            length: 0
        };

        var rootjQuery = jQuery(document), // document原生DOM对象
            rquickExpr = rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            init = jQuery.fn.init = function (selector, context, root) {
                var mactch, elem;
                if (!selector) return this; // 没传selector 返回一个空的jQuery对象
                root = root || rootjQuery
                // selector 支持三种不同的类型：字符串，原生DOM对象{浏览器内置方法获取的DOM元素对象}，函数...
                if (typeof selector === 'string') {

                    if (selector[0] === '<' && selector[selector.length - 1] === ">" && selector.length >= 3) {
                        // 传递的是html字符串 $('<div></div>') 则是创建一个DOM元素对象[jQuery实例对象]
                        mactch = [null, selector, null]
                    } else {
                        // 传递的是选择器字符串 则是获取DOM元素对象[jQuery实例对象]
                        mactch = rquickExpr.exec(selector)
                    }
                    // Match html or make sure no context is specified for #id
                    if (match && (match[1] || !context)) {

                        // HANDLE: $(html) -> $(array)
                        if (match[1]) {
                            context = context instanceof jQuery ? context[0] : context;

                            // Option to run scripts is true for back-compat
                            // Intentionally let the error be thrown if parseHTML is not present
                            jQuery.merge(this, jQuery.parseHTML(
                                match[1],
                                context && context.nodeType ? context.ownerDocument || context : document,
                                true
                            ));

                            // HANDLE: $(html, props)
                            if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                                for (match in context) {

                                  
                                    if (isFunction(this[match])) {
                                        this[match](context[match]);

                              
                                    } else {
                                        this.attr(match, context[match]);
                                    }
                                }
                            }

                            return this;

                        } else {
                            elem = document.getElementById(match[2]);

                            if (elem) {
                                this[0] = elem;
                                this.length = 1;
                            }
                            return this;
                        }

                    } else if (!context || context.jquery) {
                        return (context || root).find(selector);
                    } else {
                        return this.constructor(context).find(selector);
                    }
                } else if (selector.nodeType) { //传入的若是原生DOM对象，变成jQuery对象 且是类数组
                    this[0] = selector
                    this.length = 1
                    return this
                } else if (isFunction(selector)) {
                    // 传递的若是函数 则 $(function(){}) 原理 === $(document).ready(function(){})
                    // 等待页面DOM结构加载完成触发执行的回调函数 DOM加载完触发 页面可能没渲染完 
                    // 基于 document.addEventListener('DOMContentLoaded',function(){})
                    // window.onload=function(){} 在所有资源都加载完成触发
                    return root.ready !== undefined ? root.ready(selector) : selector(jQuery)
                }
                return jQuery.makeArray(selector, this)
            };
        init.prototype = jQuery.fn // jQuery原型重定向的对象

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