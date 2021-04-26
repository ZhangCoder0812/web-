let path = require("path");
let webpack = require("webpack");
let { merge } = require("webpack-merge");
let base = require("./base.config");

// 合并公用的配置文件
module.exports = merge(base, {
  mode: "development",
  devServer: {
    port: 8080,
    open: false,
    writeToDisk: false,
    hot: true,
    contentBase: path.resolve(__dirname, "../public"),
    proxy: {
      "/passport": "https://www.renrendai.com",
      "/api": {
        target: "https://www.renrendai.com",
        pathRewrite: {
          "^/api": "",
        },
        changeOrigin: true,
      },
    },
    before: function (app, server, compiler) {
      app.post("/api/xxx", function (req, res) {
        res.json({ xxx: "xxx" });
      });
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false),
    }),
  ],
});
