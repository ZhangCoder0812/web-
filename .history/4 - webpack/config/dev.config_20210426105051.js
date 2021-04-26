let webpack = require("webpack");
let { } = require('webpack-merge')
let base = require("./base.config");
module.exports = {
    mode: "development",

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
