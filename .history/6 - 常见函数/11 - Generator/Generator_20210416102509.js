/* 

 Generator 生成器 是一个迭代器生成函数 
        - 当做普通函数执行 返回一个迭代器对象itor 作为Generator的实例 并没有把方法体执行
          不能new执行 不是构造函数   
          itor.__proto__ = generator.prototype
          generator.prototype = GeneratorFunction.prototype
            + next 
            + return 
            + throw
            + Symbol.toStringTag:"Generator"
          generator.prototype.__proto__ = ?.prototype
            + Symbol.iterator
        - 异步编程解决方案
        - 状态机 封装了多个内部状态 
        - 分段 暂停执行
        - 执行返回一个 iterator 对象 通过 .next() 调用结果  { value: , done:  }
          value 是 yield 后面的值
          done 是否执行完毕 

 写法：函数function 后面有个*号 或者 函数名前面有个*号
       函数内部通过 yield 暂停执行   
        function* fn() {
            console.log(1)
            yield 'a'
            console.log(2)
            yield 'b'
            console.log(3)
        }

        function *fn() {
            console.log(1)
            yield 'a'
            console.log(2)
            yield 'b'
            console.log(3)
        }

*/

// ------------------------------------ next -------------------------------

function* fn() {
    console.log(1)
    yield 'a'
    console.log(2)
    yield 'b'
    console.log(3)
}

let f = fn()
console.log(f.next()) // 1 { value: 'a', done: false }
console.log(f.next()) // 2 { value: 'b', done: false }
console.log(f.next()) // 3 { value: undefined, done: true }
console.log(f instanceof fn) // true 当做普通函数执行相当于new执行 返回一个Generator实例



// ------------------------------------ return -------------------------------
// 内部return
function* fn1() {
    yield 1
    return 2
    yield 3
}
let it1 = fn1()
// for (let i of it) {
//     console.log(i) // 1  for..of 拿不到return及后面的值
// }
console.log(it1.next()) // { value: 1, done: false }
console.log(it1.next()) // { value: 2, done: true }
console.log(it1.next()) // { value: undefined, done: true }

//调用return方法
function* fn2() {
    yield 1
    yield 2
    yield 3
}
let it2 = fn2()
// console.log(it.throw('xxx')) // 直接抛错 下面也不会执行了
console.log(it2.next()) // { value: 1, done: false }
console.log(it2.return('end')) // { value: 'end', done: true }


// ------------------------------------ 传参 -------------------------------

//第一次next的传值无效 传的值是赋给上一次yield的返回结果
function* fn3() {
    console.log(1)
    let a = yield
    console.log(a)
    let b = yield
    console.log(b)
}

let it3 = fn3()
console.log(it3.next(10)) // 1 { value: undefined, done: false }
console.log(it3.next(20)) // 20 { value: undefined, done: false }
console.log(it3.next(30)) // 30 { value: undefined, done: false }

// ------------------------------------ 华丽的分割线 -------------------------------

function* gen1() {
    yield 1;
    yield 2;
}

function* gen2() {
    yield 3;
    yield gen1(); // 这样拿到到只是一个gen1的迭代器对象 并不会迭代gen1
    yield 4;
}
let it4 = gen2()
console.log(it4.next()) // { value: 3, done: false }
console.log(it4.next()) // { value: Object [Generator] {}, done: false }
console.log(it4.next()) // { value: 4, done: false }
console.log(it4.next()) // { value: undefined, done: true }

// ---------------

function* gen3() {
    yield 1;
    yield 2;
}

function* gen4() {
    yield 3;
    yield* gen3(); // 这样yield加个*就会迭代gen1
    yield 4;
}
let it5 = gen4()
console.log(it5.next()) // { value: 3, done: false }
console.log(it5.next()) // { value: Object [Generator] {}, done: false }
console.log(it5.next()) // { value: 4, done: false }
console.log(it5.next()) // { value: undefined, done: true }
console.log(it5.next()) // { value: undefined, done: true }


{ value: 3, done: false }
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 4, done: false }
{ value: undefined, done: true }