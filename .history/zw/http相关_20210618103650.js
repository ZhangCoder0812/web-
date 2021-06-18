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
            if (beforeHooks[key]) {
                const res = beforeHooks[key].call(proxyXHR.args);
                if (res === false) {
                    return;
                }
            }
        };
    }
    // 重写属性
    overwriteAttributes(key, proxyXHR) {}
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

xhr.open();
