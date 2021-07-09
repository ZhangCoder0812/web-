/* 
 
    Iterator
        - 一种接口机制 为各种不同的数据结构提供统一的访问机制

    作用：
        - 为各种数据类型 提供一个统一的访问接口
        - 使数据结构成员能够按某种次序排列
        - 主要为 for...of 提供接口
        
    执行过程：不断调用 .next() 方法 使得指针向下指向不同成员  
            返回一个对象 {value,next} 表示当前成员的数据 

    浏览器没有内置的Iterator类  部分数据有迭代的接口方法 Symbol.iterator
    数组/部分类数组「arguments/NodeList/HTMLCollection」/字符串/Set/Map/Generator
    具有Symbol.iterator接口的数据就可以使用 for...of 进行遍历
    Object.prototype上是不具备Symbol.iterator接口的        

*/

// 模拟 iterator 方法执行
let it = makeIterator([1, 2, 3]);
function makeIterator(arr) {
  let nextIndex = 0;
  return {
    next() {
      let isEnd = nextIndex >= arr.length;
      return {
        value: isEnd ? undefined : arr[nextIndex++],
        done: isEnd,
      };
    },
  };
}
console.log(it.next()); // { value: 1, done: false }
console.log(it.next()); // { value: 2, done: false }
console.log(it.next()); // { value: 3, done: false }
console.log(it.next()); // { value: undefined, done: true }

// -------------------------- for of 原理 ---------------------------

/* 

  for...of 遍历的时候 先调用「Symbol.iterator」返回一个迭代器对象it，
  每一次循环都是it.next()执行返res:{value:xxx,done:false/true}，并把res.value值拿到，所以for...of
  遍历的是每一项的值。当res.done为true的时候 循环结束。

*/

Array.prototype[Symbol.iterator] = function () {
  let index = 0,
    _this = this;
  return {
    next() {
      let isEnd = index >= _this.length;
      return {
        value: isEnd ? undefined : _this[index++],
        done: isEnd,
      };
    },
  };
};
let arr = [1, 2, 3];
for (let value of arr) {
  console.log(value);
}

let it1 = arr[Symbol.iterator]();
console.log(it1.next()); // { value: 1, done: false }
console.log(it1.next()); // { value: 2, done: false }
console.log(it1.next()); // { value: 3, done: false }
console.log(it1.next()); // { value: undefined, done: true }

// -------------------------- 对象使用 Symbol.iterator ---------------------------

let obj = {
  name: "wade",
  age: 10,
  0: 1,
  1: 2,
};
/*  报错 Uncaught TypeError: obj is not iterable
    for (let value of obj) {
       console.log(value);
    }

   对象不能直接使用for...of迭代 因为对象没有 Symbol.iterator 接口
   实现对象可以 for...of 遍历，可以手动添加 Symbol.iterator
*/

Object.prototype[Symbol.iterator] = function () {
  let _this = this,
    index = 0,
    keys = [...Object.keys(_this), Object.getOwnPropertySymbols(_this)];
  // 这里对象和数组的写法有所不同 要先拿到所有的keys
  return {
    next() {
      let key = keys[index++];
      let isEnd = index >= keys.length;
      return {
        value: isEnd ? undefined : _this[key],
        done: isEnd,
      };
    },
  };
};

for (let value of obj) {
  console.log(value);
}

//--------- 项目中我们更多使用的是类数组对象可以使用for...of ------
let obj1 = {
  0: 10,
  1: 20,
  2: 30,
  3: 40,
  length: 4,
};
obj1[Symbol.iterator] = Array.prototype[Symbol.iterator]; // 直接拿数组上的这个方法即可
for (let value of obj1) {
  console.log(value);
}
