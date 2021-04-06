/*


*/
  //深拷贝：拷贝前后的数据无关，改变一个不会影响另一个

        // JSON.parse(JSON.stringify(obj)) 日期,函数,正则,undefined 会有问题 丢失


 // 浅拷贝：改变数据都会影响

        // ... 只能展开一层（浅拷贝）
                let obj = { name: 'wade', address: { x: 100, y: 200 } }
                let o = { ...obj }
                obj.name = 'lbj'
                obj.address.x = 300
                console.log(obj) // { name: 'lbj', address: { x: 300, y: 200 } }
                console.log(o) // { name: 'wade', address: { x: 300, y: 200 } }

        // slice（浅拷贝）
                let a = [1, 2, 3]
                let arr = [a]
                let newArr = arr.slice()
                newArr[0][0] = 100
                console.log(arr) // [ [ 100, 2, 3 ] ]



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