module.exports = {
    presets: ["@babel/preset-env"],
    plugins: [
        ["@babel/plugin-proposal-decorators", { legacy: true }], // 这个要放在前面 也要加上{ legacy: true } 
        ["@babel/plugin-proposal-class-properties"],
    ],
};
