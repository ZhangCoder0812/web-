/*

  关于this的5种情况：
      this：函数的执行主体(谁执行的函数)
      - 事件绑定
      - 函数执行「普通函数执行 成员访问 匿名函数 回调函数」
      - 构造函数
      - 箭头函数 没有this 向上级查找 call/apply/bind改变不了箭头函数的this
      - 基于call/apply/bind改变this

  全局上下文的 this->window
  块级作用域中没有自己的this 执向上级上下文中的this 「箭头函数也是」

*/

/*

总结：

  this跟执行时有关！！！（箭头函数定义时有关）
   - 直接调用函数，不管函数被放在什么位置，this都是window 严格模式下 undefined
   - 被别人调用，谁点出来的就是谁(执行时调用的那个对象)
     原因：访问符访问函数 函数会隐士的绑定前面的对象
   - 构造函数内中 this.xxx=xxx 中的 this 是当前类的实例
   - call apply bind 执行函数this是第一个参数
   - 箭头函数没有自己的this 指向定义时候外层的this
   - 箭头函数可以调用 call apply bind 不会报错，也不会影响this指向

*/