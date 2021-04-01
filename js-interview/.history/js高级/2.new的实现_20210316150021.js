function myNew() {
    // 拿到构造函数 剩余的arguments 就是其他的参数
    let Constructor = [].shift.call(arguments)
    let obj = {} // 返回的结果
    obj.__proto__ = Constructor.prototype // 继承原型上的方法

    // 如果档当前构造函数返回的是一个引用类型 需要把这个对象返回
    let r = Constructor.apply(obj, arguments)
    return r instanceof Object ? r : obj

}

function Animal(type) {
    this.type = type // 实例上的属性

    /* 
        若构造函数返回的是一个引用类型 实例就是这个引用类型
        也就没有 type 属性 和 say方法
        return { name: 'wade' } 
    */

}

Animal.prototype.say = function () {
    console.log('say')
}

//let animal = new Animal('哺乳类')
let animal = myNew(Animal, '哺乳类')
console.log(animal.type)
animal.say()

console.log(animal) //  { name: 'wade' } 

/* 

为什么箭头函数不能被new?
 - 

*/