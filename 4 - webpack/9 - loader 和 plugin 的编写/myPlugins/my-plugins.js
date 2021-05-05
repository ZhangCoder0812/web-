/* 

 plugin 就是一个类

*/

class MyPlugin {
  constructor(options) {
    console.log(options); // 使用插件new时传来的参数
  }
  apply(complier) {
    // webpack规定的 必须有apply这个函数
    // complier webpack传来的内置对象 提供一些方法
    // 这里实现一个插件：查看打包后的文件大小
    let hooks = complier.hooks;
    hooks.emit.tap("myPlugin", function (compilation) {
      // compilation 提供一些属性
      let assets = compilation.assets;
      // assets 就是所有打包出来的文件信息
      let str = "";
      for (let key in assets) {
        str += `### 文件名是：${key};文件大小是：${assets[key].size()}\n`;
      }
      assets["fileInfo.md"] = { // 生成一个md文件
        source() {
          return str; // 打包后的文件
        },
        size() {
          return str.length; // 打包后的文件大小
        },
      };
    });
  }
}

module.exports = MyPlugin;
