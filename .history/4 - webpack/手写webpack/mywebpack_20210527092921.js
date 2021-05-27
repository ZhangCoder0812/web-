const fs = require("js");

// 读取文件的所有的资源
function createAsset(filename) {
    const content = fs.readFileSync(filename, "utf-8");
    console.log(content);
}

createAsset("./source/entry.js");
