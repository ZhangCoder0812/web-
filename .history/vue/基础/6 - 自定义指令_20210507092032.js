// 简写 bind+update 的集合
Vue.directive("color", function(el, { value }) {
    el.style.color = value;
});
// 使用 v-color='red'

// 全写 指令的生命周期 bind insert
Vue.directive("color", {
    bind(el, { value }) {
        el.style.color = value;
    },
    insert() {},
    update(el, { value }) {
        el.style.color = value;
    },
    componentUpdated() {},
    unbind() {},
});

// 一般用于做按钮级别的权限校验
Vue.directive("perssion", {
    insert(el, { value }) {
        if (value < 3) {
            el.parentNode.removeChild(el);
        }
    },
});

//使用 v-perssion=''4"
