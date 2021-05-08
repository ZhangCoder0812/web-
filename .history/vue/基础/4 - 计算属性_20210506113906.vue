<template>
    <div>
        <div>{{name.split('').reverse().join('')}}</div>
        <div>{{rename}}</div>
        <div>{{fn()}}</div>
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