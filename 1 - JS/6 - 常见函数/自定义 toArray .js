/* 

 toArray(params) 转换为数组的方法
       参数不固定长度 不固定类型

 
*/

function toArray(...params) {
  return params;
  // return [...arguments]
  // return Array.from(arguments)
  // return [].slice.call(arguments)
  // return Array.prototype.slice.call(arguments)
  /* 
     arguments.slice = Array.prototype.slice
     return arguments.slice() 
  */
  // 自己循环push
}

let arr = toArray(1, 2, "A");
console.log(arr); // [1,2,'A']
