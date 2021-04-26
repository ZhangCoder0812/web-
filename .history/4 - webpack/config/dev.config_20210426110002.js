let webpack = require("webpack");
let { merge } = require("webpack-merge");
let base = require("./base.config");

// 合并公用的配置文件
module.exports = merge(base, {
    mode: "development",
    devServer:{ // 开发服务器的配置项
     port:3000
    },
    plugins: [
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(false),
        }),
    ],
});
