<template>
    <div>
        <input type="text" v-model="age" />
        <div>
            {{
                name
                    .split("")
                    .reverse()
                    .join("")
            }}
        </div>
        <div>{{ rename }}</div>
        <div>{{ fn() }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "wade",
            age: "",
        };
    },
    computed: {
        rename() {
            console.log("computed");
            return this.name
                .split("")
                .reverse()
                .join("");
        },
    },
    methods: {
        fn() {
            console.log("methods");
            return this.name
                .split("")
                .reverse()
                .join("");
        },
    },
};
/* 

  计算属性有缓存 当依赖的值发生变化的

*/
</script>
