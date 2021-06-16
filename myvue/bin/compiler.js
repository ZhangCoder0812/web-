import Watcher from "./watcher.js";

export default class Compiler {
    constructor(vm) {
        this.el = vm.$el;
        this.vm = vm;
        this.methods = vm.$methods; // 拿methods是因为模版上绑定的有事件
        this.compile(vm.$el);
    }
    // 编译模板
    compile(el) {
        const childNodes = el.childNodes;
        Array.from(childNodes).forEach(node => {
            if (this.isTextNode(node)) {
                // 文本节点
                this.compileText(node);
            } else if (this.isElementNode(node)) {
                // 元素节点
                this.compileElement(node);
            }
            // 有子节点 递归调用
            if (node.childNodes && node.childNodes.length > 0) {
                this.compile(node);
            }
        });
    }
    compileText(node) {
        // {{msg}} msg:wade
        const reg = /\{\{(.+?)\}\}/;
        const value = node.textContent; // wade
        if (reg.test(value)) {
            const key = RegExp.$1.trim(); // msg
            node.textContent = value.replace(reg, this.vm[key]);
            new Watcher(this.vm, key, newVal => {
                node.textContent = newVal; // 更新视图
            });
        }
    }
    compileElement(node) {
        if (node.attributes.length) {
            // 遍历元素节点的所有属性
            Array.from(node.attributes).forEach(attr => {
                const attrName = attr.name;
                if (this.isDirective(attrName)) {
                    // v-model v-html  v-on:click
                    let directiveName =
                        attrName.indexOf(":") > -1 ? attrName.substr(5) : attrName.substr(2);
                    let key = attr.value; // msg
                    // 更新元素节点
                    this.update(node, key, directiveName);
                }
            });
        }
    }
    update(node, key, directiveName) {
        const updateFn = this[directiveName + "Updater"]; // modelUpdater htmlUpdater ...
        updateFn && updateFn.call(this, node, this.vm[key], key, directiveName);
    }
    // 解析 v-text
    textUpdater(node, value, key) {
        node.textContent = value; // 本次的值
        // 以后更新变化的值
        new Watcher(this.vm, key, newValue => {
            node.textContent = newValue;
        });
    }
    // 解析 v-model
    modelUpdater(node, value, key) {
        node.value = value;
        new Watcher(this.vm, key, newVal => {
            node.value = newVal;
        });
        node.addEventListener("input", () => {
            this.vm[key] = node.value;
        });
    }
    // 解析 v-html
    htmlUpdater(node, value, key) {
        node.innerHTML = value; // 本次的值
        // 以后更新变化的值
        new Watcher(this.vm, key, newValue => {
            node.innerHTML = newValue;
        });
    }
    // 解析 v-on
    clickUpdater(node, value, key, directiveName) {
        node.addEventListener(directiveName, this.methods[key]);
    }
    // 判断是否文本节点
    isTextNode(node) {
        return node.nodeType === 3;
    }
    // 判断是否元素节点
    isElementNode(node) {
        return node.nodeType === 1;
    }
    // 判断是否是指令 v- 开头
    isDirective(attrName) {
        return attrName.startsWith("v-");
    }
}
