let path = require("path");
let webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
let miniCssExtractPlugin = require("mini-css-extract-plugin");
let CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin"); // 压缩css
let TerserWebpackPlugin = require("terser-webpack-plugin"); // 压缩js
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
                test: /\.css$/i,
                use: [miniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    //优化项
    optimization: {
        minimizer: [
            new CssMinimizerWebpackPlugin(), // 压缩css
            new TerserWebpackPlugin(),
        ],
    },
    resolve:{
        alias:{
            '@':'src'
        }
    }
};
