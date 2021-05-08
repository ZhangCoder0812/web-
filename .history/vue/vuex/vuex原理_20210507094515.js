/* 

 vuex是一个插件 Vue.use(vuex) 所以vuex要有install方法。
 使用时 new Store()

*/

const install = Vue => {};

class Store {}

export default {
    install, // 为Vue.use服务
    Store, // 为new Store服务
};
