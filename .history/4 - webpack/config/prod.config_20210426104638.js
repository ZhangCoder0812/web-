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
        path: path.resolve(__dirname, "../dist"),
    },
    // 插件
    plugins: [

        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            VERSION: JSON.stringify("5fa3b9"),
            BROWSER_SUPPORTS_HTML5: true,
            TWO: "1+1",
            "typeof window": JSON.stringify("object"),
        }),
    ],
};
