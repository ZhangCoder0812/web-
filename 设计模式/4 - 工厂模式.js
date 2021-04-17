/* 

 工厂模式：通过传递不同参数，实现不同功能
         JQ中的工厂模式「加工转换」

*/

function fn(type) {
  if (type === 1) {
    // do someing
  }
  if (type === 2) {
    // do someing
  }
}

fn(1);
fn(2);

// -----------------------

(function () {
  function jQuery(selector, context) {
    return jQuery.fn.init(selector, context);
  }
  jQuery.fn = jQuery.prototype = {
    constructor: jQuery,
  };
  // 中间转换
  function init(selector, context, root) {}
  jQuery.fn.init = init;
  init.prototype = jQuery.fn;
})();

// $() -> 当作普通函数执行 可以生成jQuery的实例
