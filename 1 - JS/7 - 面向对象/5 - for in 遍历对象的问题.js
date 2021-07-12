/* 

  for in 遍历对象会有的问题：

    - 性能比较差。会遍历私有和共有属性，需要配合 hasOwnProperty 获取私有属性。
       通过function创建的类 原型上添加的属性和方法可以遍历出来 属于可枚举属性。
       通过class创建的类 在内部给原型上添加的属性和方法不能遍历出来 属于不可枚举属性。
        静态属性和方法都拿不到
      「能被迭代的属性都是可枚举的 粗略认为
         内置共有属性一般是不可枚举的 如：constructor hasOwnProperty toString length ...
         自定义私有的属性是可枚举的」。 
    - 遍历不了 Symbol 属性
    - 优先迭代数字属性名 从小到大。输出结果顺序跟对象中key的顺序不一致


  Object.keys()  获取所有非 Symbol 的可枚举的私有属性。原型链上属性获取不了 数字属性优先遍历  

  Object.getOwnPropertyNames()  获取所有非 Symbol 的的私有属性。如：会遍历出数组的length属性。

  Object.getOwnPropertySymbols() 获取Symbol属性

*/

let obj = {
  name: "wade",
  [Symbol("A")]: 10,
  1: 2,
  2: 1,
};
Object.prototype.say = function () { };
for (let key in obj) {
  console.log(key);
}
/*  
    1
    2
    name
    say
*/

console.log(Object.keys(obj)); //[ '1', '2', 'name' ]

console.log(Object.getOwnPropertyNames(obj)); // [ '1', '2', 'name' ]

console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(A) ]

// 获取所有私有属性 包括Symbol
function getAllOwnProperty(obj) {
  return [...Object.keys(obj), Object.getOwnPropertySymbols(obj)];
}
console.log(getAllOwnProperty(obj)); // [ '1', '2', 'name', [ Symbol(A) ] ]
