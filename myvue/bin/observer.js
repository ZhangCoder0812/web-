export default class Observer {
    constructor(data) {
        this.traverse(data);
    }
    // 递归遍历data中所有属性
    traverse(data) {}
    // 给传入的数据设置 getter/setter
    defineReactive(obj, key, val) {
        // 递归遍历
    }
}
