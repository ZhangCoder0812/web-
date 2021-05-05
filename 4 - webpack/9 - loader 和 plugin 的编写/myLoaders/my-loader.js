/* 

 loader 就是一个函数 

*/

module.exports = function (source) {
  // 拿到资源处理完要返回出去 因为下一个loader要用 source 字符串格式
  console.log(source);
  source = "/* this is my-loader */\n" + source;
  return source;
};
