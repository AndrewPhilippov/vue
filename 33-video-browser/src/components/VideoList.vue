<template>
    <ul class="list-group col-md-4">
        <VideoListItem
                @videoSelect="onVideoSelect"
                v-for="video in videos"
                :video="video"
                :key="video.etag"
        >{{ video }}
        </VideoListItem>
    </ul>
</template>

<script>
    import VideoListItem from './VideoListItem'
    export default {
        name: "VideoList",
        props: ['videos'],
        components: {
            VideoListItem
        },
        methods: {
            onVideoSelect(video) {
                this.$emit('videoSelect', video)
            }
        }
    }
</script>

<style scoped>

</style>
