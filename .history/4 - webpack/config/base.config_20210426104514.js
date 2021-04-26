let path = require("path");
let webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development", 
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
