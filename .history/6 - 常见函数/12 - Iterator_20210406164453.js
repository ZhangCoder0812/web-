
/* 
 
Iterator
    - 一种接口机制 为各种不同的数据结构提供统一的访问机制

作用：
    - 为各种数据类型 提供一个统一的访问接口
    - 使数据结构成员能够按某种次序排列
    - 主要为 for...of 提供接口
    
执行过程：不断调用 .next() 方法 使得指针向下指向不同成员  
         返回一个对象 {value,next} 表示当前成员的数据 

*/


// 模拟 iterator 方法执行
let it = makeIterator([1, 2, 3])
function makeIterator(arr) {
    let nextIndex = 0
    return {
        next() {
            let isEnd = nextIndex >= arr.length
            return {
                value: isEnd ? undefined : arr[nextIndex++],
                done: isEnd
            }
        }
    }
}
console.log(it.next()) // { value: 1, done: false }
console.log(it.next()) // { value: 2, done: false }
console.log(it.next()) // { value: 3, done: false }
console.log(it.next()) // { value: undefined, done: true }


// 调用数组的 iterator
let arr = [1, 2, 3]
let it = arr[Symbol.iterator]()
console.log(it.next()) // { value: 1, done: false }
console.log(it.next()) // { value: 2, done: false }
console.log(it.next()) // { value: 3, done: false }
console.log(it.next()) // { value: undefined, done: true }