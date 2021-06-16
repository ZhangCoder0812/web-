import Vue from './bin/vue'

const vm = new Vue({
    el:'#app',
    data:{
        msg:'hello'
    },
    methods:{
        handler(){
            alert(13123)
        }
    }
})