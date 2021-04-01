


/*  
   一个页面上有很多按钮，每个按钮都有自己的逻辑，若此时用户属性
   banned = true ，则此用户被封禁了 点击页面任何按钮或元素都不
   可响应原来的函数，而是提示 '你被封禁了'
   
   - 每个按钮添加事件。 不合适
   - 使用事件代理
   - 页面添加遮罩
*/

window.addEventListener('click', () => {
    if (banned === true) { // 是什么类型就判断什么类型 便于维护和阅读
        e.stopprogation()
    }
}, true)

/* 
 
 stopprogation 和 preventdefault的区别，
  前者停止向外冒泡，但是执行当前事件，
  preventdefault不执行，但是向上冒泡。


*/