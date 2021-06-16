import Vue from "./bin/vue.js";

const vm = new Vue({
    el: "#app",
    data: {
        msg: "hello",
        name: "wade",
        age: 12,
    },
    methods: {
        handler() {
            alert(13123);
        },
    },
});

console.log(vm);
