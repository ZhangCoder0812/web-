module.exports = {
    presets: ["@babel/preset-env"],
    // plugins: [
    //     ["@babel/plugin-proposal-decorators", { legacy: true }], // 这个要放在前面
    //     ["@babel/plugin-proposal-class-properties"],
    // ],
    plugins: [
        "@babel/plugin-proposal-decorators",
        "@babel/plugin-proposal-class-properties"
    ],
};
