let path = require("path");
let webpack = require("webpack");
let { merge } = require("webpack-merge");
let base = require("./base.config");

// 合并公用的配置文件
module.exports = merge(base, {
    mode: "development",
    // 开发服务器的配置项
    devServer: {
        port: 8080, //启动端口 默认8080
        open: false, // 自动打开浏览器
        writeToDisk: false, // 设置能看到dev启动项目打包后的文件 默认在内存中 看不到
        hot: true, // 热更新
        // 需要提供静态文件时才配置 public/index.html 引入一个css 正常情况下404
        // 因为public文件夹不是一个服务
        contentBase: path.resolve(__dirname, "../public"),
        // 跨域代理
        proxy: {
            // 代理以 /user-s 开头的api都代理到https://pro.solarmanpv.com这个域上
            "/user-s": "https://pro.solarmanpv.com",

            
        },
    },
    plugins: [
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(false),
        }),
    ],
});
