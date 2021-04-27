
/* 
  postcss-loader 用来给css3属性加前缀 处理兼容
  npm install postcss postcss-loader postcss-preset-env 
  根目录下要新建.browserslistrc

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
