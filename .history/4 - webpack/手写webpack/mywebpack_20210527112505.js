const fs = require("fs");
const path = require("path");
const babylon = require("babylon"); // 生成ast
const traverse = require("babel-traverse").default;
const babel = require("babel-core"); // 编译代码
let ID = 0; // 文件唯一标识

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
    const id = ID++;
    // console.log(dependencies)  './message'

    // 编译文件中的源代码
    const { code } = babel.transformFromAst(ast, null, {
        presets: ["env"],
    });

    return {
        id,
        filename,
        dependencies,
        code,
    };
}

function createGraph(entry) {
    const mainAsset = createAsset(entry);
    const allAsset = [mainAsset];
    for (let asset of allAsset) {
        // 将依赖的相对路径转为绝对路径
        const dirname = path.dirname(asset.filename);
        asset.mapping = {};
        asset.dependencies.forEach(relativePath => {
            const absolutePath = path.join(dirname, relativePath);
            console.log(absolutePath);
            // 获取依赖的资源
            const childAsset = createAsset(absolutePath);
            asset.mapping[relativePath] = childAsset.id;
            // 遍历所有的依赖文件
            allAsset.push(childAsset);
        });
    }
    return allAsset;
}

function bundle(graph) {
    let modules = "";
    graph.forEach(module => {
        module += `${module.id}:[
            function(require,module,exports){
                ${module.code}
            },
            ${JSON.stringify(module.mapping)},
        ],`;
    });
    const result = `
       (function(){

       })({${modules}})
    `;
    return result;
}

const graph = createGraph("./source/entry.js");
const result = bundle(graph);

console.log(result);
