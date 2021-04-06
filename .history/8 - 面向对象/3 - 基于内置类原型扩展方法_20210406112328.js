/* 

基于内置类原型扩展方法；
    - 简化调用方式，无需传递参数，方法中this是要处理的对象
    - 可以实现'链式调用'，执行结果可以继续调用所属类原型上的方法

    // myUnique 去重
    Array.prototype.myUnique = function () {
    // this 当前实例「操作的数组」
    return [...new Set(this)];
    };

    let arr = [10, 20, 30, 10, 20];
    console.log(arr.myUnique());

*/

// checkNum 检测传入的是不是数字 不是的话就转为数字 不能转为的数字就使用 0 代替

const checkNum = (num) => (isNaN(+num) ? 0 : num);

Number.prototype.plus = function (number) {
  // this -> 实例对像10
  return this + checkNum(number);
};

Number.prototype.minus = function (number) {
  return this - checkNum(number);
};

let n = 10;
let m = n.plus(10).minus(5);
console.log(m); // 15

/* 

  创建值的方式：
     - 子面量方式：对于原始值来说 创建出来的是标准的原始值类型
         let n = 10 
         typeof n => 'number'
         n.toFixed(2) 内部会'装箱'操作 会把原始类型n变成对象实例类型n new Number(n)
         n+10 => 20

     - 构造函数方式：对于原始值来说 创建出来的是对象数据类型
        let n = new Number(10)
        typeof n => 'object'
        m.toFixed(2) 基于__proto__调用 Number.prototype 上的方法
        m+10 => 20 内部会'拆箱'操作 把m变成原始值类型再进行运算 「Symbol.toPrimitive/valueOf/toString」

    对于引用数据类型来说两中创建方式一样，
    对于原始数据类型来说有所不同 但都能调用所属类原型上的方法
    

*/
