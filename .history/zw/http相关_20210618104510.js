/* 

 1. 解决跨域问题
  
     jsonp 
     cors
     node 正向代理 请求api 代理到自己的服务器上请求 结果再返给前端 
     nginx 反向代理 proxy_pass 转发 

 2. 全局请求处理? 统一处理登录态 统一处理全局错误
 
    axios  adaptar / 拦截器 interceptor

 3. 代码题 你能给xhr 添加hooks 实现在各个阶段打日志么？
       
     
*/

class XhrHook {
    constructor(beforeHooks = {}, afterHooks = {}) {
        this.XHR = window.XMLHttpRequest; // 保存原有的XML对象
        this.beforeHooks = beforeHooks; // 拦截原有行为
        this.afterHooks = afterHooks;
        this.init();
    }
    init() {
        let _this = this;
        //这个不能用箭头函数 因为使用的时候要new
        window.XMLHttpRequest = function() {
            this._xhr = new _this.XHR();
            _this.overwrite(this);
        };
    }
    overwrite(proxyXHR) {
        for (let key in proxyXHR._xhr) {
            if (typeof proxyXHR._xhr[key] === "function") {
                this.overwriteMethod(key, proxyXHR);
                continue;
            }
            this.overwriteAttributes(key, proxyXHR);
        }
    }
    // 重写方法
    overwriteMethod(key, proxyXHR) {
        let beforeHooks = this.beforeHooks;
        let afterHooks = this.afterHooks;
        proxyXHR[key] = (...args) => {
            // 拦截
            if (beforeHooks[key]) {
                const res = beforeHooks[key].call(proxyXHR.args);
                if (res === false) {
                    return;
                }
            }
            // 执行原本xhr上的方法
            const res = proxyXHR._xhr[key].apply(proxyXHR._xhr, args);
            afterHooks[key] && afterHooks[key].call(proxyXHR._xhr, res);
        };
    }
    // 重写属性
    overwriteAttributes(key, proxyXHR) {
        Object.defineProperties(proxyXHR, key, this.setProperyDescriptor(key, proxyXHR));
    }
    setProperyDescriptor(key, proxyXHR) {
        let obj = Object.create(null);
        let _this = this;
        obj.get = function() {

        };
        obj.set = function(val) {
            if(!key.startsWith('on')){
                proxyXHR['_'+key] =val
                return 
            }
            if(_this.beforeHooks[key]){
                this._xhr[key] = function(...args){
                    _this.beforeHooks[key].call(proxyXHR)
                }
            }
        };
        return obj;
    }
}

new XhrHook({
    open: function() {
        console.log("open");
        return false; // 返回false不执行下面逻辑 true继续向下执行
    },
    onload: function() {
        console.log("onload");
    },
    onreadystatechange: function() {
        console.log("onreadystatechange");
    },
    onerror: function() {
        console.log("onerror");
    },
});

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://www.baidu.com", true);

xhr.send();

// onreadystatechange是属性 是我们手动赋值的方法
xhr.onreadystatechange = function(){

}