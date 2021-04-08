
/*
        constructor  类的原型上有constructor属性存储当前类本身 利用这一点可以进行数据检测
                     一般不常用 constructor容易被修改

            let n = 12
            console.log(n.constructor === Number) // true
            let arr = []
            console.log(arr.constructor === Array) // true
            console.log(arr.constructor === Object) // false

*/