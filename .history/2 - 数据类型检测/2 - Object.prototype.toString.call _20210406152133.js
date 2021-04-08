/*

   Object.prototype.toString.call()
       相对比较正确

    但是只能校验当前已经存在的类型
        class A { }
        let a = new A()
        console.log(Object.prototype.toString.call(a)) // [object Object] 应该是A

*/

console.log(Object.prototype.toString.call([])) // [object Array]
console.log(Object.prototype.toString.call({}))  // [object Object]
console.log(Object.prototype.toString.call(new RegExp('/A/'))) // [object RegExp]
console.log(Object.prototype.toString.call(function () { }))  // [object Function]
