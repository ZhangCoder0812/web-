/*
    - JSON.parse(JSON.stringify(obj)) 变成JSON格式字符串
    弊端：
        - 不能循环引用
        - 处理不了bigInt类型值
        - Symbol，undefined，function 丢失
        - 正则 -> 空对象 Error->空对象 日期->字符串

    - Qs.stringify 把对象变为urlencoded格式字符串。 即"xxx=xxx&xxx=xxx"格式
      也存在很多问题

    自定义深拷贝方法不考虑Symbol ，bigInt 因为他们不能被new ，包装成Object也不行
    let sy1 = Object(Symbol('A'))
    let sy2 = Object(sy1)
    console.log(sy1==sy2)// true Symbol处理不了

    Error 错误对象不能直接new 会返回一个新的错误对像。 new Error(x .message)
    let er1 = new Error('xxx') // Error xxx
    let er2 = new Erroe(er1) // Error Error xxx , 不能直接new
    let er2 = new Erroe(er1.message) //  Error xxx ,每个错误对象有message属性

    函数处理：克隆函数外面包一层
    function fn(){
        console.log(100)
    }
    let fn2 = function(){
        return fn.apply(this,arguments)
    }
    虽然fn2和fn1不同 但fn2执行结果和fn1一样

*/


function deepClone(obj, hash = new WeakMap()) {
    // WeakMap es6 这里借助用来放置死循环 自己引用自己
    // 如果是null或者undefined 就直接返回   因为 null == undefined 所以只判断一个即可
    if (obj == null) return obj;
    if (obj instanceof Date) return new Date(obj)
    if (obj instanceof RegExp) return new RegExp(obj)
    // 如果是函数就不需要深拷贝 函数不考虑 函数是调用的
    if (typeof obj !== 'object') return obj;
    // 是对象进行深拷贝 可能是数组 或者 对象
    // 如果之前拷贝过直接返回
    if (hash.get(obj)) return hash.get(obj)
    let cloneObj = new obj.constructor() // 通过传过来参数的构造函数生成一个新的对象
    hash.set(obj, cloneObj) // 没拷贝过加入哈希表中 
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) { // 只拷贝实例上的属性
            // 递归拷贝
            cloneObj[key] = deepClone(obj[key], hash)
        }
    }
    return cloneObj
}

let obj = { name: 'wade', address: { x: 100, y: 200 } }
// obj.o = obj 死循环 自己引用自己
let o = deepClone(obj)
obj.name = 'lbj'
obj.address.x = 300
console.log(obj) // { name: 'lbj', address: { x: 300, y: 200 } }
console.log(o) // { name: 'wade', address: { x: 100, y: 200 } }