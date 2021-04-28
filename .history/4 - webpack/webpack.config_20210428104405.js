let path = require("path");
let webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
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
            template: "./public/index.html",
            filename: "index.html",
        }),
    ],
    module: {
        rules: [
            // {
            //     // 匹配以css结尾的文件 用css-loader 把js中的css编译成webpack认识的文件
            //     // 直接安装 css-loader 即可 不用再webpack中引入
            //     test: /\.css$/,
            //     use: "css-loader",
            // },

        ],
    },
};
