/* 

 惰性函数：做更少的事情
    获取元素样式 getComputedStyle IE6，7，8不兼容
    浏览器不变情况下 每执行 getCss 方法都要进行判断，这样没有必要，
    第一次兼容处理后，以后没必要再处理
   
    function getCsss(elem, attr) {
      if (window.getComputedStyle) {
        return window.getComputedStyle(elem)[attr];
      }
        return elem.currentStyle[attr];
    }

  解决方案：函数重构 只在第一次做兼容处理 这就是’惰性思想‘  

 */

function getCsss(elem, attr) {
    if (window.getComputedStyle) {
        getCsss = function(elem, attr) {
            return window.getComputedStyle(elem)[attr];
        };
    } else {
        getCsss = function(elem, attr) {
            return elem.currentStyle[attr];
        };
    }
    return getCsss(elem, attr);
}

consle.log(getCsss(document.body, "width"));
consle.log(getCsss(document.body, "padding"));
consle.log(getCsss(document.body, "margin"));
