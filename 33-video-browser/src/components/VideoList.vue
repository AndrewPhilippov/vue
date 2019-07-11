<template>
    <ul>
        <VideoListItem v-for="video in videos">{{ video }}</VideoListItem>
    </ul>
</template>

<script>
    import VideoListItem from './VideoListItem'
    export default {
        name: "VideoList",
        props: ['videos'],
        components: {
            VideoListItem
        }
    }
</script>

<style scoped>

</style>
