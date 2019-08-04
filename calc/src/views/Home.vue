<template>
    <v-app>
        <div class="home">
            <Header />
            <Calc />
        </div>
    </v-app>
</template>

<script>
    // @ is an alias to /src
    import Header from "@/components/layout/Header";
    import Calc from '@/components/Calc.vue';

    export default {
        name: 'home',
        components: {
            Header,
            Calc
        }
    }
</script>
<style scoped>
    .home{
        width: 80%;
        margin: 0 auto;
        padding: 50px 0;
    }
</style>
