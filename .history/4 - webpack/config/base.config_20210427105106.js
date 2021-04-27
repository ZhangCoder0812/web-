let path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
let miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.[fullhash:6].js",
        path: path.resolve(__dirname, "../dist"),
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["**/*", "!xxx.js"],
        }),
        new htmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
            title: "base",
            xxx: '<link href="xxx.css"></link>',
        }),
        new miniCssExtractPlugin({
            filename: "css/2.css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [miniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.less$/i,
                use: [miniCssExtractPlugin.loader, "css-loader", "less-loader", "postcss-loader"],
                exclude: /node_modules/,
            },
            // npm install file-loader url-loader 处理图片/音视频文件
            // 使用url-loader 要把 file-loader也装上 内部依赖 file-loader
            // 会将图片转成base64 能减少http请求
            {
                test: /\.(svg|png|jpg|gif|mp3)/,
                // use: {
                //     loader: "url-loader",
                //     options: {
                //         // options 当前loader的配置项
                //         limit: 20 * 1024, // 设置超过20kb就不转为base64了
                //         name: "img/[name].[ext]", // file-loader的配置 指定文件名字 默认是加hash值的
                //     },
                // },
    
                {
                    test: /\.html/,
                    type: 'asset/resource', // webpack5的写法
                    generator: {
                      filename: 'static/[hash][ext][query]'
                    }
                  }
            },
        ],
    },
};
