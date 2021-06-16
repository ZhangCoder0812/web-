import Vue from "./bin/vue.js";

const vm = new Vue({
    el: "#a1pp",
    data: {
        msg: "hello",
    },
    methods: {
        handler() {
            alert(13123);
        },
    },
});

console.log(vm);
