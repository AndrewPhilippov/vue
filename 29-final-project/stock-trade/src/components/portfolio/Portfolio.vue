<template>
    <div>
        <app-header></app-header>
        <h1>The portfolio/Portfolio component</h1>
    </div>
</template>

<script>
    import Header from "../Header";

    export default {
        name: "Portfolio",
        components: {
            appHeader: Header
        }
    }
</script>

<style scoped>

</style>
