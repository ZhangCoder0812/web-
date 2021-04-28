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
    console.log(target)
}

@looger
class Son{

}