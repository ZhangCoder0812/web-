
let path = require("path");
let webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 删除多余的打包后的文件 hash
const htmlWebpackPlugin = require("html-webpack-plugin"); // 自动在html中引入打包后的js文件

module.exports = {
    mode: "production", // 打包方式 production 生产环境 development开发环境
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
        // DefinePlugin 提供编译阶段的全局常量/变量，webpack自带的插件
        // 这里都写成字符串 是为了外面拿到的是整体表达式 是不是字符串都行 看使用场景
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            VERSION: JSON.stringify("5fa3b9"),
            BROWSER_SUPPORTS_HTML5: true,
            TWO: "1+1",
            "typeof window": JSON.stringify("object"),
            //"process.env.NODE_ENV": 123, // 不配置process.env.NODE_ENV 外面直接使用是 mode的值
        }),
    ],
};
