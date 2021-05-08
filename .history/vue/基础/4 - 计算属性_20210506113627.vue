<template>
    
</template>

<script>
export default {
    name: "MyInput",
    props: ["value"],
    co
    methods: {
        fn(e) {
            this.$emit("input", e.target.value);
        },
    },
};