<template>
    <div class="home container">
        <Calc/>
    </div>
</template>

<script>
    import Calc from '@/components/Calc.vue'

    export default {
        name: 'home',
        components: {
            Calc,
        },
    }
</script>
