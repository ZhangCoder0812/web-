/* 
    资源文件一般使用 esModule 规范
    配置文件一般使用 commonJS 规范 因为给node读的，node不认识 esModule。
*/

// 这个对象就是给webpack使用的配置对象

let path = require("path");
let webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 删除多余的打包后的文件 hash
const htmlWebpackPlugin = require("html-webpack-plugin"); // 自动在html中引入打包后的js文件

module.exports = {
    mode: "development", // 打包方式 production生产环境 development开发环境
    entry: "./src/index.js", //入口文件
    // 出口
    output: {
        /* 
        bundle.[fullhash].js 生成文件名带有hash 避免使用缓存。
        fullhash/chunkhash/contenthash 之前用的是[hash] 新版webpack改名了
        undle.[fullhash:5].js 设置hash长度为5
    */
        filename: "bundle.[fullhash:6].js",
        /* 
        生成文件的存放路径 必须是绝对路径 /Users/mdzz/Desktop/web-/4 - webpack/dist
        __dirname -> /Users/mdzz/Desktop/web-/4 - webpack
        路径不要自己拼 windows \ ，mac / 杠不一样 用path.resolve拼接
     */
        path: path.resolve(__dirname, "dist"),
    },
    // 插件
    plugins: [
        // 指定不删除的文件 我们在dist文件夹中可能手动存放的有文件 但是一执行打包命令就把dist清空了
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["**/*", "!xxx.js"],
        }),
        new htmlWebpackPlugin({
            template: "./public/index.html", // 指定html模版 不指定默认生成index.html
            filename: "index.html", // 指定生层的html名字 默认index.html
            title: "xxx", // 修改模版中的title 模版中国要配置ejs语法
            xxx: '<link href="xxx.css"></link>',
        }),
        // DefinePlugin 提供编译阶段的全局常量/变量 创建配置的全局常量 webpack自带的插件
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            VERSION: JSON.stringify("5fa3b9"),
            BROWSER_SUPPORTS_HTML5: true,
            TWO: "1+1",
            "typeof window": JSON.stringify("object"),
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
        }),
    ],
};
