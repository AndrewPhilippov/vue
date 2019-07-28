<template>
    <div id="app" :class="[ gender ? ' indigo darken-3' : 'purple accent-4' ]" >
        <Navbar />
        <router-view/>
    </div>
</template>

<style>
    #app{
        height: 100vh;
        width: 100vw;
    }
    .male-color {
        background-color: blue;
    }

    .female-color {
        background-color: pink;
    }
</style>
<script>
    import Navbar from "./components/Navbar";

    export default {
        props: ['gender'],
        components: {
            Navbar,
        },
    }
</script>