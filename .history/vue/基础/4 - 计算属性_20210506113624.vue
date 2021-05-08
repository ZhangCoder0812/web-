<template>
    
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