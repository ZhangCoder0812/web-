// 普通的 let/const/箭头函数 等babel的预设中都已经处理好了
let a = 1;
console.log(a);

const fn = () => {};

// class 的语法babel的预设也默认支持
class Person {
    constructor() {
        this.name = 1;
    }
    age = 12; // 这种新写法就不支持了 需要另装包 
}
