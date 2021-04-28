module.exports = {
    presets: ["@babel/preset-env"],
    plugins: [
        // 这个要放在前面 也要加上{ legacy: true } 版本的意思好像 不加会报错 不知道为啥
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        ["@babel/plugin-proposal-class-properties"],
    ],
};
