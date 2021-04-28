// 普通的 let/const/箭头函数 等babel的预设中都已经处理好了
let a = 1;
console.log(a);

const fn = () => {};

// class 的语法babel的预设也默认支持
class Person {
    constructor() {
        this.name = 1;
    }
    age = 12;
    /* 
        这种新写法就不支持了 需要另装包 以及static修饰的属性和方法
        npm install  @babel/plugin-proposal-class-properties
        放到 babel.config.js 的插件选项里
        新版好像不用安装 直接配置就好了
    */
}

function looger(target) {
    target.xxx = "xxx";
    console.log(target);
}

/* 
  类的装饰器语法也不支持 需要安装 @babel/plugin-proposal-decorators
  可以用来给多个类添加共同的属性和方法  不用再每个类中单独写了，没啥实际价值
*/
@looger
class Son {}



// 现在 async/await 好像内置在预设里了 可以编译 
// 但是运行时报错 Uncaught ReferenceError: regeneratorRuntime is not defined
// babel 是可以编译async/await语法但是 编译出来的代码需要用到regeneratorRuntime这个方法
// regeneratorRuntime这个方法是由 @babel/plugin-transform-runtime 这个包提供 开发环境用
// 一般还要装一下 @babel/runtime 生成环境时用
// 还要安装 
async function getData() {
    let res = await Promise.resolve('----------');
    console.log(res);
}
getData();
