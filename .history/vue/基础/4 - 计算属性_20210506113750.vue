<template>
    
</template>

<script>
export default {
    data(){
      return{
          name:"wade"
      }
    },
    computed:{
      rename(){
          console.log('computed')
          return this.name.split('').res
      }
    },
    methods: {
        fn() {
            
        },
    },
};