
// Fn() 普通函数执行 实现new Fn() 构造函数执行效果
function Fn() {
    return new init()
}

Fn.prototype = {
    constructor: Fn
}

const init = function init() { }
init.prototype = Fn.prototype

Fn()


// 生成器函数本身就具有这个特点 当做普通函数执行返回一个迭代器对象itor
// itor.__proto__ === fn.prototype 即当做普通函数执行返回的结果是自己的实例
function* fn() { }
fn.prototype = {
    constructor: fn,
    name: 'fn'
}
let itor = fn()
console.log(itor)