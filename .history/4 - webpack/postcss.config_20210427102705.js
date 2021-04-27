
/* 
  postcss.config.js 专门用来处理postcss配置的文件
  postcss-loader 用来给css3属性加前缀 处理兼容
  npm install postcss postcss-loader postcss-preset-env 
  根目录下要新建.browserslistrc 告诉postcss要兼容哪些浏览器

*/
module.exports = {
    plugins: [
        [
            "postcss-preset-env",
            {
                // Options
            },
        ],
    ],
};
