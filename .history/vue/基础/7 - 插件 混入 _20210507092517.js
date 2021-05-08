/* 
  Vue.use: 插件 必须要有个install方法, 若没有则看插件是不是函数
  是的话就执行 不是的话就什么都不做
  可以通过插件给原型上增加方法 一般不这样做
*/

// myPlugin.js;
export default {
    install(Vue) {
        Vue.component("myPlugin", {
            render: h => h("h1", {}, "自己的插件"),
        });
    },
};

Vue.use(myPlugin);
// 使用：<myPlugin></myPlugin>


/* 
  混入：数据 就近原则  优先使用自己的
  生命周期混入的先执行 组件自己的后执行 

  全局混入 每个组件都能拿到 this.xxx 直接和组件进行合并 不是通过链查找
*/
Vue.mixin({
  data(){
    return{
      xxx:123
    }
  },
 created(){
   console.log('-----')
 }
})