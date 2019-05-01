<template>
  <div>
    <p>Server Status: {{ status }}</p>
    <hr>
    <button v-on:click="changeStatus">Change Status</button>
  </div>
</template>
<script>
  export default{
    data: function(){
      return {
        status: 'Critical'
      }
    },
    methods: {
      changeStatus: function(){
        this.status = 'Normal'
      }
    }
  }
</script>
