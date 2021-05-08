/* 

  $route 存的属性
  $router 存的方法 用于编程士导航 

  this.$router.push()  会新增一条历史记录
  this.$router.replace() 不会新增历史记录 

  路由元信息 meta对象

  路由钩子函数

   全局前置守卫 用于权限校验 是否登陆
   全局解析守卫
   全局后置钩子 用于实现路由跳转叶敏啊顶部进度条
   路由独享守卫 单个路由的守卫
   组件内守卫 组件内部监听路由 用于离开页面提示表单未保存

*/
const isLogin = false;
const userLevel = 4; //当前用户权限
router.beforeEach((to, from, next) => {
  if (isLogin) {
    // 权限校验
    if (userLevel > to.meta.level) {
      next();
    } else {
      next("/onAuth");
    }
  } else {
    // 不需要登陆的页面
    if (to.path === "/" || to.path === "/login") {
      next();
    } else {
      next("/login");
    }
  }
  // 设置不同路由对应的页面title
  document.title = to.meta.title || "默认标题";
});
