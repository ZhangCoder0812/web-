let path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
let miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.[fullhash:6].js",
        path: path.resolve(__dirname, "../dist"),
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["**/*", "!xxx.js"],
        }),
        new htmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
            title: "base",
            xxx: '<link href="xxx.css"></link>',
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
            // npm install  file-loader url-loader 处理图片/音视频文件
            {  
                test:/\.(svg|png|jpg|gif|mp3)/,
            }
        ],
    },
};
