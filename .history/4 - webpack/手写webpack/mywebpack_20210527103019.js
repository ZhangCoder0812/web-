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
    const dependencies = []; // 存放所有的依赖
    // 遍历 ast 中的 ImportDeclaration 节点属性
    traverse(ast, {
        ImportDeclaration: ({ node }) => {
            // console.log(node);
            dependencies.push(node.source.value);
        },
    });
}

createAsset("./source/entry.js");
