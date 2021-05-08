let path = require("path");
let webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
let miniCssExtractPlugin = require("mini-css-extract-plugin");
let CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin"); // 压缩css
let TerserWebpackPlugin = require("terser-webpack-plugin"); // 压缩js
let { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.[fullhash:6].js",
        path: path.resolve(__dirname, "dist"),
    },
    // 插件
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["**/*", "!xxx.js", "!dll_*", "!manifest.json"],
        }),
        new htmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
        }),
        new miniCssExtractPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
        }),
        new webpack.IgnorePlugin({
            resourceRegExp: /^\.\/locale$/,
            contextRegExp: /moment$/,
        }),
        new BundleAnalyzerPlugin(),
        new webpack.DllReferencePlugin({
            // 我们在使用包的时候 就去manifest.json文件中看看是否已经打包过
            manifest: path.resolve(__dirname, "./dist/manifest.json"),
        }),
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
            // new TerserWebpackPlugin(),
        ],
        splitChunks: {
            cacheGroups: {
                // 缓存组
                jq: {
                    // 将jquery,momnet这个两个包单独拎出来 减少index.js的体积
                    filename: "jq-momnet.js",
                    test: /jquery|moment/,
                    chunks: "initial",
                },
            },
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    externals: {
        vue: "Vue",
    },
};
