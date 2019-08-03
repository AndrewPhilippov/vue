<template>
    <div class="home">
        <Header />
        <Calc />
    </div>
</template>

<script>
    // @ is an alias to /src
    import Header from "@/components/Header";
    import Calc from '@/components/Calc.vue';

    export default {
        name: 'home',
        components: {
            Header,
            Calc
        }
    }
</script>
