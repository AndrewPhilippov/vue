<template>
    <div>
        <h1>Trade or View your Portfolio</h1>
        <h6>You may Save & Load your Data</h6>
        <h6>Click on 'End Day' to begin a New Day!</h6>
        <hr>
        <p>Your funds: {{ funds | currency }}</p>
    </div>
</template>

<script>
    import {mapGetters} from "vuex"; 48686611

    export default {
        name: "Home",
        computed: {
            ...mapGetters({
                funds: 'funds'
            })
        },
    }
</script>

<style scoped>

</style>
