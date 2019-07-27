<template>
    <div id="app" :class="[ gender === 'male' ? 'male-color' : 'weman-color' ]">
        <Home/>
        <router-view/>
    </div>
</template>

<style>
</style>
<script>
    import Home from "./components/Navbar";

    export default {
        props: ['gender'],
        components: {
            Home,
        },
    }
</script>