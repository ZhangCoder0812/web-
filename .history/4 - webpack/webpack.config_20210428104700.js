let path = require("path");
let webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
let miniCssExtractPlugin = require("mini-css-extract-plugin");
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
        new miniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                //项目中一般不使用style-loader因为style标签的形式不太好
                // 使用 mini-css-extract-plugin 单独生成css文件
                test: /\.css$/i,
                use: [miniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
};
