


/*  
   一个页面上有很多按钮，每个按钮都有自己的逻辑，若此时用户属性
   banned = true ，则此用户被封禁了 点击页面任何按钮或元素都不
   可响应原来的函数，而是提示 '你被封禁了'
*/

window.addEventListener('click', () => {
    if (banned === true) {
        e.stopprogation()
    }
}, true)