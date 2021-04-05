//自己写方法库 支持多种环境
(function () {
  function debounce(fn, wait, immediate) {
    let timer;
    return function (...args) {
      if (!timer && immediate) {
        fn.call(this, ...args);
      }
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        !immediate && fn.call(this, ...args);
        clearTimeout(timer);
        timer = null;
      }, wait);
    };
  }

  function thtotate(fn, wait) {
    let timer,
      pre = 0;
    return function (...args) {
      let now = +new Date(),
        pass = now - pre; // 过了多少时间
      if (wait < pass) {
        // 间隔时间超过wait 立即执行 包含第一次触发
        fn.call(this, ...args);
        pre = +new Date();
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
      } else if (!timer) {
        // 间隔时间没超过wait 等待剩余时间后执行
        timer = setTimeout(() => {
          fn.call(this, ...args);
          pre = +new Date();
          clearTimeout(timer);
          timer = null;
        }, wait - pass);
      }
    };
  }
  
  let utils = {
    debounce,
    thtotate,
  };

  // 支持多库共存
  let _$ = window.$;
  utils.noConflict = function noConflict() {
    if (window.$ === utils) {
      window.$ = _$;
    }
    return utils;
  };

  //暴露API，支持：浏览器直接导入，webpack编译，node环境
  if (typeof window !== "undefined") {
    window.utils = utils;
  }
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = utils;
  }
})();
