<template>
    <div>
        <div></div>
    </div>
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
          return this.name.split('').reverse().join('')
      }
    },
    methods: {
        fn() {
            console.log('methods')
            return this.name.split('').reverse().join('')
        },
    },
};