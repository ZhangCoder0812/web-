import Vue from "./bin/vue.js";

const vm = new Vue({
    el: "#app",
    data: {
        msg: "hello",
        count:'100' ,
        testHtml:'<ul><li>1</li><li>2</li></ul>'
    },
    methods: {
        handler() {
            alert(13123);
        },
    },
});

console.log(vm);
