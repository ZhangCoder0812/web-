<template>
    <input type="text" :value="value" @input="fn" />
</template>

<script>
export default {
    name: "MyInput",
    props: ["value"],
    methods: {
        fn(e) {
            this.$emit("input", e.target.value);
        },
    },
};

/* 

<template>
    <MyInput v-model="name" />
</template>

<script>
export default {
    data() {
        return {
            name: "",
        };
    },
};
</script>


*/
</script>


