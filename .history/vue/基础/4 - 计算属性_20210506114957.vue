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
            //   console.log(this.age); 只有在计算属性中使用了data中的数据 就会有依赖
            //  必须是同步
            setTimeout(() => console.log(this.age), 1000); // 这就不会有依赖 异步
            return this.name.split("").reverse().join("");
        },
        // 全写 可以改变计算属性
        // rename:{
        //    get(){
        //     return this.name.split("").reverse().join("");
        //    },
        //    set(val){
        //      this.name = val+'').split("").reverse().join("");  
        //    }
        // }
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

  计算属性有缓存 当依赖的值发生变化的时候才会重新执行
  当改变age时候会重新渲染模板 fn会一直执行 而rename 不会重新执行
  这就看出来计算属性有缓存了。 

*/
</script>
