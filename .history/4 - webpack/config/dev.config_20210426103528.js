let path = require("path");
let webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 删除多余的打包后的文件 hash
const htmlWebpackPlugin = require("html-webpack-plugin"); // 自动在html中引入打包后的js文件

module.exports = {
    mode: "development", // 打包方式 production 生产环境 development 开发环境
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
            title: "开发环境", // 修改模版中的title 模版中国要配置ejs语法
            xxx: '<link href="xxx.css"></link>',
        }),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            VERSION: JSON.stringify("5fa3b9"),
            BROWSER_SUPPORTS_HTML5: true,
            TWO: "1+1",
            "typeof window": JSON.stringify("object"),
        }),
    ],
};
