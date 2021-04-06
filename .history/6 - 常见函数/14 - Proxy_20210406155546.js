/*

  Proxy 代理 在访问目标对象之前设置一层拦截 之后访问对象
        都要经过这层拦截。

  写法： let p = new Proxy(target,handler)
         target 拦截对象 可以为空
         handler 拦截行为
         Proxy内部的this关键字的指向是Proxy代理本身

  拦截行为： receiver（一般是Proxy对象本身，可选参数）
       get(target,propKey,recever) 拦截对象属性读取
       set(target,propKey,value,recever) 拦截对象属性设置
       has(target,propKey) 拦截判断是否含有某属性的操作 返回一个布尔值
       deleteProperty(target,propKey) 拦截删除属性操作 返回布尔值
       apply
       ...

*/

/*


let obj = {
    name: 'wade',
}

let obProxy = new Proxy(obj, {
    get(target, key) {
        if (target.hasOwnProperty(key)) {
            return target[key]
        } else {
            throw new Error(`没有${key}属性`)
        }

    },
    set(target, key, value) {
        if (parseInt(value) < 0) {
            throw new Error('不合法')
        } else {
            target[key] = value
        }
    }
})

console.log(obProxy.name)
console.log(obProxy.sex) // 报错   没有sex属性

obProxy.age = 100 // 报错    不合法

*/





// 应用：实现私有变量

/*
    let obj = {
        name: 'wade',
        _age: 123
    }

    let obProxy = new Proxy(obj, {
        get(target, key) {
            if (key.startsWith('_')) {
                throw new Error('私有属性外部不能访问')
            }
            return target[key]
        },

    })

    console.log(obProxy.name)
    console.log(obProxy._age) // 报错

*/


// Proxy可以直接劫持数组的改变
let arr = [1, 2, 3]
let newArr = new Proxy(arr, {
    get(target, key) {
        console.log('获取数组值')
        return key in target ? target[key] : undefined
    },
    set(target, key, value) {
        console.log('修改数组值')
        target[key] = value
    }
})

console.log(newArr[1])

newArr[5] = 0
