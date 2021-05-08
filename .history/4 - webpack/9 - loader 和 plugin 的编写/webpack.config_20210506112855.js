let path = require("path");
let webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
let myPlugin = require("./myPlugins/my-plugins");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[fullhash:6].js",
    path: path.resolve(__dirname, "dist"),
  },
  // 插件
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!xxx.js"],
    }),
    new htmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new myPlugin({
      x: "xxxx",
    }),
  ],
  resolveLoader: {
    // 配置loader的查找路径
    modules: ["node_modules", "./myLoaders"],
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: ["my-loader"],
      },
    ],
  },
};
