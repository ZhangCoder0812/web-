
// Fn() 普通函数执行 实现new Fn() 构造函数执行 效果
function Fn() {
    return new init()
}

Fn.prototype = {
    constructor: Fn
}

const init = function init() { }
init.prototype = Fn.prototype

Fn()

function* fn(){}
fn.prototype={
    constructor:fn,
    name:'fn'
}
let itor = fn()
console.log(itor)