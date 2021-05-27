const fs = require("js");
const path = require("path");

// 读取文件的所有的资源
function createAsset(filename) {
    const content = fs.readFileSync(filename, "utf-8");
    console.log(content);
}

createAsset('C:\Users\ZY\Desktop\web-12\4 - webpack\手写webpack\mywebpack.js'));
