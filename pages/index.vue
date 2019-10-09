<template>
  <v-app>
    <Navigation />
    <main>
      <Carousel />
    </main>
  </v-app>
</template>

<script>
    import Navigation from '@/components/Navigation'
    import Carousel from "@/components/Carousel";
    export default {
        data() {
            return {
            }
        },
        components: {
            Carousel,
            Navigation
        }
    }
</script>
<style scoped>
</style>
