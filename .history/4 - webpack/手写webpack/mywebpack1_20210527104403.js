const fs = require("fs");
const babylon = require("babylon"); // 生成ast
const traverse = require("babel-traverse").default;
let ID = 0; // 文件唯一标识

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
    console.log(dependencies); // './message'
}
 createAsset("./source/entry.js");
