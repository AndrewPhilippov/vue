<template>
  <div class="home">
    <Navbar />
    <GMap />
  </div>
</template>

<script>
import Navbar from '@/components/layouts/Navbar.vue';
import GMap from '@/components/home/GMap';

export default {
  name: 'home',
  components: {
    Navbar,
    GMap,
  },
};
</script>
