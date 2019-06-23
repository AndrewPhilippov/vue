<template>
    <div class="row">
        <app-stock v-for="stock in stocks" :stock="stock">{{ stock }}</app-stock>
    </div>
</template>

<script>
    import Stock from './Stock.vue'
    export default {
        name: "Stocks",
        components: {
            appStock: Stock,
        },
        computed: {
            stocks() {
                return this.$store.getters.stocks;
            }
        }
    }
</script>

<style scoped>

</style>
