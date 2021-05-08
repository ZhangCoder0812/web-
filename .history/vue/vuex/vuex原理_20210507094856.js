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
        be
    })
};

class Store {}

export default {
    install, // 为Vue.use服务
    Store, // 为new Store服务
};
