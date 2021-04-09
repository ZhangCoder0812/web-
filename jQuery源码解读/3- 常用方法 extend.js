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
})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
  /* ------------------------------------------------------------------- */
  var version = "3.6.0",
    jQuery = function (selector, context) {
      return new jQuery.fn.init(selector, context); // jQuery类的实例
    };
  jQuery.fn = jQuery.prototype = {
    // 将 jQuery.fn 和 jQuery.prototype 原型重定向
    jquery: version,
    constructor: jQuery, // 原型重定向导致构造函数丢失 手动添加
    length: 0,
  };

  var rootjQuery = jQuery(document), // document原生DOM对象
    rquickExpr = (rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/),
    init = (jQuery.fn.init = function (selector, context, root) {
      var mactch, elem;
      if (!selector) return this; // 没传selector 返回一个空的jQuery对象
      root = root || rootjQuery;
      // selector 支持三种不同的类型：字符串，原生DOM对象{浏览器内置方法获取的DOM元素对象}，函数...
      if (typeof selector === "string") {
        if (
          selector[0] === "<" &&
          selector[selector.length - 1] === ">" &&
          selector.length >= 3
        ) {
          // 传递的是html字符串 $('<div></div>') 则是创建一个DOM元素对象[jQuery实例对象]
          mactch = [null, selector, null];
        } else {
          // 传递的是选择器字符串 则是获取DOM元素对象[jQuery实例对象]
          mactch = rquickExpr.exec(selector);
        }
        // Match html or make sure no context is specified for #id
        if (match && (match[1] || !context)) {
          // HANDLE: $(html) -> $(array)
          if (match[1]) {
            context = context instanceof jQuery ? context[0] : context;

            // Option to run scripts is true for back-compat
            // Intentionally let the error be thrown if parseHTML is not present
            jQuery.merge(
              this,
              jQuery.parseHTML(
                match[1],
                context && context.nodeType
                  ? context.ownerDocument || context
                  : document,
                true
              )
            );

            // HANDLE: $(html, props)
            if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
              for (match in context) {
                // Properties of context are called as methods if possible
                if (isFunction(this[match])) {
                  this[match](context[match]);

                  // ...and otherwise set as attributes
                } else {
                  this.attr(match, context[match]);
                }
              }
            }

            return this;

            // HANDLE: $(#id)
          } else {
            elem = document.getElementById(match[2]);

            if (elem) {
              // Inject the element directly into the jQuery object
              this[0] = elem;
              this.length = 1;
            }
            return this;
          }

          // HANDLE: $(expr, $(...))
        } else if (!context || context.jquery) {
          return (context || root).find(selector);

          // HANDLE: $(expr, context)
          // (which is just equivalent to: $(context).find(expr)
        } else {
          return this.constructor(context).find(selector);
        }
      } else if (selector.nodeType) {
        //传入的若是原生DOM对象，变成jQuery对象 且是类数组
        this[0] = selector;
        this.length = 1;
        return this;
      } else if (isFunction(selector)) {
        // 传递的若是函数 则 $(function(){}) 原理 === $(document).ready(function(){})
        // 等待页面DOM结构加载完成触发执行的回调函数 DOM加载完触发 页面可能没渲染完
        // 基于 document.addEventListener('DOMContentLoaded',function(){})
        // window.onload=function(){} 在所有资源都加载完成触发
        return root.ready !== undefined
          ? root.ready(selector)
          : selector(jQuery);
      }
      // 处理HTMLCollection/NodeList等DOM元素集合
      return jQuery.makeArray(selector, this);
    });
  init.prototype = jQuery.fn; // jQuery原型重定向的对象

  jQuery.makeArray = function (arr, results) {
    var ret = results || [];
    if (arr != null) {
      if (isArrayLike(Object(arr))) {
        jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
      } else {
        push.call(ret, arr);
      }
    }
    return ret;
  };
  // 合并两个集合 数组或类数组 [把第二个集合放在第一个集合的末尾，返回第一个集合]
  jQuery.merge = function (first, second) {
    var len = +second.length,
      j = 0,
      i = first.length;
    for (; j < len; j++) {
      first[i++] = second[j];
    }
    first.length = i;
    return first;
  };

  /* 
   1. 向 jQuery原型($.fn) / jQuery对象($) 上扩展方法 ，$.fn.extend({}) / $.extend()
      其实就是合并 把obj和$.fn/对象合并 类似于 $.extend($/$.fn,obj)
   2. 可以实现多个对象的合并「支持深度合并」类似Object.assign()
      $.extend(obj1,obj2,obj3...) 返回obj1
      $.extend(true,obj1,obj2,obj3...) 深度合并
 */
  jQuery.extend = jQuery.fn.extend = function () {
    var options,
      name,
      src,
      copy,
      copyIsArray,
      clone,
      target = arguments[0] || {}, // 传入的第一个参数
      i = 1, //如果target为布尔值 则从第二个参数开始才是要合并的对象
      length = arguments.length, //传了几个对象
      deep = false; // 默认浅合并

    // 第一个参数是布尔值 则是设置深浅合并
    if (typeof target === "boolean") {
      deep = target;
      // 第二个参数开始才是要合并的对象
      target = arguments[i] || {};
      i++;
    }

    // 第一个参数不是布尔值
    if (typeof target !== "object" && !isFunction(target)) {
      target = {};
    }

    // 条件成立表示是要向 $.fn/$ 上扩展方法
    if (i === length) {
      target = this; // target：jQuery对象/jQuery.fn原型对象
      i--;
    }

    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          copy = options[name];

          // Prevent Object.prototype pollution
          // Prevent never-ending loop
          if (name === "__proto__" || target === copy) {
            continue;
          }

          // Recurse if we're merging plain objects or arrays
          if (
            deep &&
            copy &&
            (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))
          ) {
            src = target[name];

            // Ensure proper type for the source value
            if (copyIsArray && !Array.isArray(src)) {
              clone = [];
            } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
              clone = {};
            } else {
              clone = src;
            }
            copyIsArray = false;

            // Never move original objects, clone them
            target[name] = jQuery.extend(deep, clone, copy);

            // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }

    // Return the modified object
    return target;
  };

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
});
