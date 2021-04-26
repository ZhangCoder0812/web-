let path = require("path");
let webpack = require("webpack");
 
module.exports = {
    mode: "development", // 打包方式 production 生产环境 development 开发环境
     
    plugins: [
         
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            VERSION: JSON.stringify("5fa3b9"),
            BROWSER_SUPPORTS_HTML5: true,
            TWO: "1+1",
            "typeof window": JSON.stringify("object"),
        }),
    ],
};
