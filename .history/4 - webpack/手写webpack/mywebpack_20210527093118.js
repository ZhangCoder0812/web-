const fs = require("js");
const path = require("path");

// 读取文件的所有的资源
function createAsset(filename) {
    const content = fs.readFileSync(filename, "utf-8");
    console.log(content);
}

createAsset(path.resolve(__dirname, "./source/entry.js"));
