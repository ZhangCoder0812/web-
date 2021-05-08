/* 
 Vue.use: 插件 必须要有个install方法, 若没有则看插件是不是函数 是的话就执行 不是的话就什么都不做
可以通过插件给原型上增加方法 一般不这样做
*/

myPlugin.js
export default{
  install(Vue){
     Vue.component('myPlugin',{
       render:h=>h('h1',{},''自己的插件')
  })
 }
}


Vue.use(myPlugin)
使用：<myPlugin></myPlugin>