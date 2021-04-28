/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
    // webpackBootstrap
    /******/ var __webpack_modules__ = {
        /***/ "./src/index.js":
            /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
            /***/ () => {
                eval(
                    'var _class;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// 普通的 let/const/箭头函数 等babel的预设中都已经处理好了\nvar a = 1;\nconsole.log(a);\n\nvar fn = function fn() {}; // class 的语法babel的预设也默认支持\n\n\nvar Person = function Person() {\n  _classCallCheck(this, Person);\n\n  _defineProperty(this, "age", 12);\n\n  this.name = 1;\n}\n/* \r\n    这种新写法就不支持了 需要另装包 以及static修饰的属性和方法\r\n    npm install  @babel/plugin-proposal-class-properties\r\n    放到 babel.config.js 的插件选项里\r\n    新版好像不用安装 直接配置就好了\r\n*/\n;\n\nfunction looger(target) {\n  target.xxx = "xxx";\n  console.log(target);\n}\n\nvar // 类的装饰器语法也不支持 需要安装 @babel/plugin-proposal-decorators\nSon = looger(_class = function Son() {\n  _classCallCheck(this, Son);\n}) || _class;\n\n//# sourceURL=webpack://xxxx/./src/index.js?'
                );

                /***/
            },

        /******/
    }; // startup // Load entry module and return exports // This entry module can't be inlined because the eval devtool is used.
    /************************************************************************/
    /******/

    /******/ /******/ /******/ /******/ var __webpack_exports__ = {};
    /******/ __webpack_modules__["./src/index.js"]();
    /******/
    /******/
})();
