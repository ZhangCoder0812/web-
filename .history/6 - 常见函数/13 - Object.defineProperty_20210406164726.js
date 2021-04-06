
/* 

  Object.defineProperty 
        - 劫持对象  需要遍历对象对属性一一劫持
        - 动态 新增/删除 属性监听不到           
        - 不适合劫持数组 数组长度较大 

*/

/* 

    let obj = {
        name: 'wade',
        age: 12
    }
    let keys = Object.keys(obj)
    keys.forEach(key => {
        let value = obj[key]
        Object.defineProperty(obj, key, {
            configurable: true, // 可配置
            enumerable: true, // 可迭代
            get() {
                console.log('--------获取值--------')
                return value // 不能 obj[key] 会死循环
            },
            set(newVal) {
                console.log('--------设置值--------')
                value = newVal // 不能 obj[key]= newVal 会死循环
            }
        })
    })

    console.log(obj.name)
    obj.age = 20
    obj.sex = '男' // 新增不存在属性 不会触发set
    console.log(obj) 

*/


/* 
    // value 返回固定的值或函数
    let obj = {
        name: 'wade',
        age: 12
    }
    let keys = Object.keys(obj)
    keys.forEach(key => {
        Object.defineProperty(obj, key, {
            configurable: true, // 可配置
            enumerable: true, // 可迭代
        // value: 1,
            value() {
                return 2
            }
        })
    })

    // console.log(obj.name) // 1 返回固定的值
    console.log(obj.name()) // 2 返回固定的函数 
*/

/*
    let arr = [1, 2, 3]
    arr.forEach((item, index) => {
        Object.defineProperty(arr, index, {
            configurable: true,
            enumerable: true,
            get() {
                console.log('--------获取值--------')
                return item
            },
            set(newVal) {
                console.log('--------设置值--------')
                item = newVal
            }
        })
    })

    console.log(arr[0])
    arr[1] = 4 // 通过索引改变值可以监听到
    arr.push(5) // 动态添加元素 监听不到
    console.log(arr)
 */

 

// 有误 
let arr = [1, 2, 3]
let methods = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']

methods.forEach(method => {
    Object.defineProperty(Array.prototype, method, {
        value(...args) {
            console.log('数组变化了')
            value.apply(this, args)
        }
    })
})

arr.push(111) 
 
 
