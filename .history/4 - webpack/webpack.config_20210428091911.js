/* 
    资源文件一般使用 esModule 规范
    配置文件一般使用 commonJS 规范 因为给node读的，node不认识 esModule。
*/

// 这个对象就是给webpack使用的配置对象

let path = require("path");
let webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 删除多余的打包后的文件 hash
const htmlWebpackPlugin = require("html-webpack-plugin"); // 自动在html中引入打包后的js文件

module.exports = {
    mode: "development", // 打包方式 production生产环境 development开发环境
    devtool: "source-map", // 代码调试 有很多选项 source-map可以详细指出错误在哪 但是打包速度慢
    entry: "./src/index.js", //入口文件
    // 出口
    output: {

        filename: "bundle.[fullhash:6].js",
        path: path.resolve(__dirname, "dist"),
    },
    // 插件
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["**/*", "!xxx.js"],
        }),
        new htmlWebpackPlugin({
            template: "./public/index.html", // 指定html模版 不指定默认生成index.html
            filename: "index.html", // 指定生层的html名字 默认index.html
            title: "xxx", // 修改模版中的title 模版中国要配置ejs语法
            xxx: '<link href="xxx.css"></link>',
        }),
  
    ],
};
