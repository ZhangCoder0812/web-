// 定义 moduleA 模块
define(function (require, factory) {
    let sum = function () {
        console.log('--sum--')
    }
    return {
        sum
    }
});