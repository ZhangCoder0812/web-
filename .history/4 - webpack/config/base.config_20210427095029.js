let path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");

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
    ],
    module: {
        rules: [
            {
                // 匹配以css结尾的文件 用css-loader 把js中的css编译成webpack认识的文件
                // 直接安装 css-loader 即可 不用再webpack中引入
                test: /\.css$/,
                use: "css-loader",
            },
            {
                // 只用 css-loader 芮然webpack认识了 但是样式还加载不出来 还不能使用
                // 要配合 style-loader 一起使用 能把认识的css编译成起作用的代码
                // 即将样式文件变成style标签插入到body中
                // 直接安装 style-loader 即可 不用再webpack中引入
                // 多个loader放在数组中 加载顺序 从右到左 从下往上
                test: /\.css$/i,
                use: "style-loader", //,
            },
        ],
    },
};
