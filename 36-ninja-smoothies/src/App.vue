<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>
<script>
  import Navbar from '@/components/Navbar';

  export default {
    components: {
      Navbar
    }
  };
</script>
<style lang="scss">
  .navbar nav{
    padding: 0 20px;
  }
</style>
