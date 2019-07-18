<template>
  <div class="home">
    <Index msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Index from '@/components/Index.vue';

export default {
  name: 'home',
  components: {
    Index,
  },
};
</script>
