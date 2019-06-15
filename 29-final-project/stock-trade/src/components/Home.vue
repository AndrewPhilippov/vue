<template>
    <div>
        <app-header></app-header>
        <h1>The Home component</h1>
    </div>
</template>

<script>
    import Header from "./Header";
    export default {
        name: "Home",
        components: {
            appHeader: Header,
        }
    }
</script>

<style scoped>

</style>
