const fs = require("fs");
const babylon = require("babylon"); // 生成ast
const traverse = require("babel-traverse").default;

// 读取文件的所有的资源
function createAsset(filename) {
    const content = fs.readFileSync(filename, "utf-8");
    const ast = babylon.parse(content, {
        sourceType: "module",
    });
   // console.log(ast);
    traverse(ast,{

    })
}

createAsset("./source/entry.js");
