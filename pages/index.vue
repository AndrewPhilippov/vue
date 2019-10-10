<template>
  <v-app>
    <Navigation />
    <main>
      <Carousel />
      <CategoryRow />
    </main>
  </v-app>
</template>

<script>
    import Navigation from '@/components/Navigation'
    import Carousel from "@/components/Carousel";
    import CategoryRow from "@/components/CategoryRow";
    export default {
        data() {
            return {
            }
        },
        components: {
            Carousel,
            Navigation,
            CategoryRow
        }
    }
</script>
<style scoped>
</style>
