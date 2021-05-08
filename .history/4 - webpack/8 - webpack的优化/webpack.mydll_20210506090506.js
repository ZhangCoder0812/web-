/* 
 专门配置动态链接库的文件
*/

let path = require("path");
let webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: {
    mydll: ["react", "echarts"], // 将react，echarts放到mydll这个文件中
  },
  output: {
    filename: "dll_[name].js",
    path: path.resolve(__dirname, "dist"),
    library: "dll_[name]", //要跟filename保持一致
  },
  plugins: [
    new webpack.DllPlugin({
      name: "dll_[name]", //要跟library保持一致
      path: path.resolve(__dirname, "dist", "manifest.json"), // 打包后的输出路径
    }),
  ],
};
