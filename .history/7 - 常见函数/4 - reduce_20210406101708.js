/* 
 
 reduce 从左到右  
 reduceRight 从右到左

 空数据不能使用reduce 会报错。
 数组只有一项 并且没有传第二个参数 则reduce内部不会执行 直接返回数组的值

 reduce((result,item,index)=>{
     result上一次回调函数返回的结果
        没有传第二个参数 第一次迭代 result是数组的第一项
        传了第二个参数 则第二个参数作为数组第一项 
     item 当前元素的值
     index 当前元素的索引
 },第二个参数)

*/

  Array.prototype.reduce = function (callback, initial /) {
    let self = this,
      i = 0,
      result = initial,
      len = self.length,
      isInit = typeof initial !== "undefined";
    if (typeof callback !== "function") {
      throw new TypeError(`${callback}is not a function`);
    }
    if (len === 0 && !isInit) {
      throw new TypeError("Reduce of empty array with no inital value");
    }
    if (len === 0 && isInit) return initial;
    if (len === 0 && !isInit) return self[0];
    if (!isInit) {
      // 没传第二个参数
      result = self[0];
      i = 1;
    }
    for (; i < len; i++) {
      result = callback(result, self[i], i); //上一次结果, 当前项, 索引
    }
    return result;
  };

  let arr = [1, 2, 3];
  let res = arr.reduce((result, item) => {
    console.log(result, item);
    return result + item;
  });
  console.log(res);
