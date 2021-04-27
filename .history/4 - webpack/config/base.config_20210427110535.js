let path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
let miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        // 多入口
        index: "./src/index.js",
        other: "./src/other.js",
    },
    output: {
        // 出口的文件name 变成动态的
        filename: "[name].[fullhash:6].js",
        path: path.resolve(__dirname, "../dist2"),
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["**/*", "!xxx.js"],
        }),
        new htmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
            chunks:['index'] 
        }),
        // 多个html
        new htmlWebpackPlugin({
            template: "./public/other.html",
            filename: "other.html",
            chunks:['index'] 
        }),
        new miniCssExtractPlugin({
            filename: "css/2.css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [miniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.less$/i,
                use: [miniCssExtractPlugin.loader, "css-loader", "less-loader", "postcss-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.(svg|png|jpg|gif|mp3)/,
                type: "asset/resource", // webpack5的写法
                generator: {
                    filename: "img/[name].[ext]",
                },
            },
        ],
    },
};
