let path = require("path");
let webpack = require("webpack");
let { merge } = require("webpack-merge");
let base = require("./base.config");

// 合并公用的配置文件
module.exports = merge(base, {
  mode: "development",
  // 开发服务器的配置项  本地开发时使用 上线时候一点用没有 对线上没有一点影响 对生成的dist文件也没有影响
  devServer: {
    port: 8080, //启动端口 默认8080
    open: false, // 自动打开浏览器
    writeToDisk: false, // 设置能看到dev启动项目打包后的文件 默认在内存中 看不到
    hot: true, // 热更新
    // 需要提供静态文件时才配置 public/index.html 引入一个css 正常情况下404
    // 因为public文件夹不是一个服务
    // 可以基于这个配置mock数据 path.resolve(__dirname, "../data") src/data/1.json $.get('./1.json)
    contentBase: path.resolve(__dirname, "../public"),
    // 跨域代理
    proxy: {
      // 代理以 /p2p 开头的 passport 都代理到https://www.renrendai.com"这个域上
      "/passport": "https://www.renrendai.com",
      "/api": {
        target: "https://www.renrendai.com",
        pathRewrite: {
          // 前段请求 xxx.com/api/login 发给后台的是 xxx.com/login 用于统一处理接口跨域 前段自己加上开头
          "^/api": "",
        },
        changeOrigin: true, // 加上这个后台不容易看出来请求是代理过来的
      },
    },
    // mock数据 配置假接口
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
