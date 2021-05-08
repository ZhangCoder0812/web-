<template>
    
</template>

<script>
export default {
    name: "MyInput",
    props: ["value"],
    computed:{

    },
    methods: {
        fn(e) {
            this.$emit("input", e.target.value);
        },
    },
};