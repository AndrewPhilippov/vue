<template>
  <div class="home container">
    <Calc/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Calc from '@/components/Calc.vue'

export default {
  name: 'home',
  components: {
    Calc,
    Navbar,
  }
}
</script>
