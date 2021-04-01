/* 

 commonJs：node 浏览器端需要提前打包处理

   暴露方式: 
       module.exports = xxx
       exports.xxx = xxx
       本质：暴露的是exports这个对象，之前是空的 现在被xxx覆盖 
            或者在exports上添加xxx属性

    引用方式：
          require()
*/