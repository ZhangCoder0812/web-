/*

 为什么要在原型上添加属性和方法？
    - 在构造函数内通过this添加的话 每生成一个对象 都会重新开辟一块内存

 new 关键字做了什么？
    - 创建一个新的对象 a
    - a 的原型链指向所属类的原型 a.__proto__ = A.prototype
    - 返回这个创建的新对象 a


*/

function A() {
    this.name = 'wade'
    return {
        age: 1
    }

}

let a = new A()
console.log(a)