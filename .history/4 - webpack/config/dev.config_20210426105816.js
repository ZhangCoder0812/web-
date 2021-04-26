let webpack = require("webpack");
let { merge } = require("webpack-merge");
let base = require("./base.config");

// 合并公用的配置文件
module.exports = merge(base, {
    mode: "development",
    plugins: [
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(false),
        }),
    ],
});
