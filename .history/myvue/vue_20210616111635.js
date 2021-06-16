/* 
 包括vue构造函数 接受各种参数
*/

export default class Vue {
    constructor(options = {}) {
        this.$options = options; // 加$区分是不是vue内部变量
        this.$data = options.data;
        this.$methods = options.methods;
        this.initRootElement(options)
    }
    // 获取根元素并存储到vue实例 检查一下传入的el是否合规
    initRootElement(options){
       if(typeof options.el === 'string'){
           this.$el = document.querySelector(options.el)
       }else if(options.el instanceof HTML)
    }
}
