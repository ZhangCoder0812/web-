
// 定义 moduleB 模块
define([ // 导入需要依赖的模块
  'moduleA'
], function (moduleA) {
  'use strict';
  // ... 模块中私有的内容
  console.log(moduleA)
});