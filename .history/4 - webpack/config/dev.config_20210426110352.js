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
        
    },
    plugins: [
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(false),
        }),
    ],
});
