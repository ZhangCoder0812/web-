/* 
021321-001
ATID-437
 commonJs：node 浏览器端需要提前打包处理 浏览器不能直接支持require

   暴露方式: 
       module.exports = xxx  只能写一个 多写会覆盖
       exports.xxx = xxx  可以写多个
       本质：暴露的是exports这个对象，之前是空的 现在被xxx覆盖 
            或者在exports上添加xxx属性

    引用方式：
        require('xxx')  
          第三方模块 xxx 为模块名
          自定义模块 xxx 为模块文件路径

    实现： 
       服务端：node 
       浏览器端：browserify 打包  最终会转换为 commonJS (require) 类似方式，
                在浏览器使用
                cnpm install browserify -g  
                cnpm install browserify -dev 全局和项目中都要下载 
                打包： browserify
                  browserify  index.js -o dist/bunndle.js  
                      

*/