/* 

  鸭子类型：长的像鸭子 我们就称为鸭子 最主要的就是想让其具备鸭子的特点。
           类什么什么的... , 类数组 类promise
           如：类数组 它的__proto__指向Object.prototype 并没有指向
              Array.prototype。和数据区别就是原型链指向问题，其余的和
              数组一样，都能for循环

*/

function sum(params) {
  //  arguments.__proto__ = Object.prototype 不能直接使用数组方法
  let arr = [];
  // @1 将类数组转为数组
  for (let i = 0; i < arguments.length; i++) {
    arr.push(arguments[i]);
  }
  let total = arr.reduce((result, item) => result + item);
  // let total = Array.prototype.slice.call(arguments).reduce((result, item) => result + item);
  // let total = [].slice.call(arguments).reduce((result, item) => result + item);
  // let total = [].reduce.call(arguments, (result, item) => result + item);
  /* 直接改变原型链
      arguments.__proto__ = Array.prototype;
      let total  = arguments.reduce((result, item) => result + item);
  */
  return total;
}

console.log(sum(1, 2, 3, 4));

// @2
Array.prototype.slice = function () {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(this[i]);
  }
  return arr;
};

/* 
    @2 slice内部的写法和 @1 相比就是 this 和 argument 的不同，
    这就是为什么 Array.prototype.slice.call(arguments) 可以执行
    数组的方法
*/

/* 
  模拟 push 方法 
    Array.prototype.push = function (val) {
        this[this.length] = val;
        // this.length++; 添加之后数组内部会长度会自动+1 我们不需要这样手动去++
                          对于对象的话 通过索引添加元素 我们需要手动去++
        return this.length;
    };
*/

let obj = {
  2: 3, // 1,无操作
  3: 4, // 无操作,2
  length: 2, // 3,4
  push: Array.prototype.push, // 粗暴的方式 直接将某个实例原型的方法赋值给自己
};
obj.push(1); // obj[obj.length]=1 => obj[2]=1 obj.length++
obj.push(2); // obj[obj.length]=2 => obj[3]=2 obj.length++
console.log(obj); // {2:1,3:2,length:4}
