/*

CMD Common Module Definition 通用模块定义
    专门用于浏览器端 模块是异步加载 依赖 sea.js 可以用npm下
    相当于 commonJs + AMD 

定义没有依赖的模块 参数固定
define(function(require,exports,module){
    exports.xxx = xxx
    module.exports = xxx
})    

定义有依赖的模块
define(function(require,exports,module){
    同步引入模块A
    var A = require('./A')

    异步引入模块B
    require.sync('./B',function(B){

    })
    
    exports.xxx = xxx
})

*/

define(function(require){
    let B = require('./module/B')
    B.fn()
})