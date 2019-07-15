<template>
    <div>
        <div v-if="isLoggedIn" class="img-container">
            <img v-for="image in allImages" :src="image.link" alt="">
        </div>
        <h2 v-else>Please, login to get started</h2>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    export default {
        name: "ImageList",
        methods: mapActions(['fetchImages']),
        created() {
            this.fetchImages();
        },
        computed: mapGetters(['allImages', 'isLoggedIn'])
    }
</script>

<style scoped>
    img{
        max-width: 100%;
        padding: 3px 6px;
    }
    .img-container{
        column-count: 3;
        column-gap: 0;
    }
</style>
