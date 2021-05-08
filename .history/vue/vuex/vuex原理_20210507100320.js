/* 

 vuex是一个插件 Vue.use(vuex) 所以vuex要有install方法。
 使用时 new Store()。

 每一个组件上都会有$store的属性，挂载到每一个组件，用的就是
 通过混入实现的。

*/

let Vue = null;

const install = _Vue => {
    Vue = _Vue;
    Vue.mixin({
        beforeCreated() {
            // 只有根组件(new Vue)的 $options中才有store实例
            // 根组件的$parent 是 undefined
            if (this.$parent.store) {
                this.$store = this.$parent.store; // 将$store放在根组件上
            } else if (this.$parent) {
                // 注意vue-router或其他的插件也会产生一个vue实例 $parent 也是 undefined
                // 所以要做下判断
                this.$store = this.$parent.store;
            }
        },
    });
};

class Store {}

export default {
    install, // 为Vue.use服务
    Store, // 为new Store服务
};
