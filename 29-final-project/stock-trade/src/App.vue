<template>
    <div class="container">
        <app-header></app-header>
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import Header from './components/Header.vue';

    export default {
        components: {
            appHeader: Header,
        },
        created() {
            this.$store.dispatch('initStocks')
        }
    }
</script>

<style>
    body {
        padding: 30px;
    }
    .slide-enter-active{
        animation: slide-in .2s ease-in forwards;
    }
    .slide-leave-active{
        animation: slide-out .2s ease-in forwards;
    }
    @keyframes slide-in {
        from{
            transform: translateX(50px);
            opacity: 0;
        }
        to{
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slide-out {
        from{
            transform: translateX(0);
            opacity: 1;
        }
        to{
            transform: translateX(50px);
            opacity: 0;
        }
    }
</style>
