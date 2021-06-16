/* 
 包括vue构造函数 接受各种参数
*/

export default class Vue{
    constructor(options={}){
        this.$options = options ; // 加$区分是不是vue内部变量
        this.$data = options.data 
        this.$methods = options.$methods  
    }
}