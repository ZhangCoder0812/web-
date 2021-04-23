/* 配置模块映射 配置好后任意模块都能拿到
    requirejs.config({
        baseUrl: "./module", // 设置查找路径 最终会和下面paths路径拼起来
        paths: {
            // 站在当前文件的路径角度去找
            // 配置的路径 定义模块依赖其他模块能查找到 就是因为
            // 在这里做了映射  不要加后缀名 require.js 处理的时候帮我们加过了
            A: "A",
            B: "B",
        },
    });
*/

// 也可以不配置 baseUrl
requirejs.config({
  paths: {
    A: "./module/A",
    B: "./module/B",
    jquery: "./lib/jQuery", // 配置第三方模块 注意：jQuery内部已经做了AMD
    // 并且暴露的模块名是 jquery  前面的key要与之统一
    //angular:'./lib/angular'
  },
//   shim:{ 并不是所有的库都支持AMD，如：angular要单独配置
//       angular:{
//           exports:'angular'
//       }
//   }
});

// 使用模块
requirejs(["B"], function (B) {
  B.showMsg();
});
