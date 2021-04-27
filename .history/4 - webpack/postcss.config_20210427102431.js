.browserslistrc
/* 

// npm install postcss postcss-loader postcss-preset-env
                        // 用来给css3属性加前缀 处理兼容

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
