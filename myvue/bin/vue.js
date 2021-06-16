/* 
 包括vue构造函数 接受各种参数
*/

export default class Vue {
    constructor(options = {}) {
        this.$options = options; // 加$区分是不是vue内部变量
        this.$data = options.data;
        this.$methods = options.methods;
        this.initRootElement(options);
        this._proxyData(this.$data);
    }
    // 获取根元素并存储到vue实例 检查一下传入的el是否合规
    initRootElement(options) {
        if (typeof options.el === "string") {
            this.$el = document.querySelector(options.el);
        } else if (options.el instanceof HTMLElement) {
            this.$el = options.el;
        }
        if (!this.$el) {
            throw new Error("传入的el不合法 请传入css selector 或 HTMLElement");
        }
    }
    // 利用Object.defineProperty将data里的属性注入到vue实例/this上
    // 以便于this.xxx 可以获取data中属性。这里不是做响应式数据劫持
    _proxyData(data) {
        Object.keys(data).forEach(key => {
            Object.defineProperty(this, key, {
                enumerable: true,
                configurable: true,
                get() {
                    return data[key];
                },
                set(newValue) {
                    if (data[key] === newValue) {
                        return;
                    }
                    data[key] = newValue;
                },
            });
        });
    }
}
