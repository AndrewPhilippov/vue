<template>
    <div class="dropper">
        <label for="uploadFile">
            <input @change="uploadImages($event.target.files)"
                   type="file"
                   name="uploadFile"
                   id="uploadFile"
                   accept="image/*"
                   multiple>
        </label>
        <span>Drag files here!</span>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        name: "UploadForm",
        methods: mapActions(['uploadImages'])
    }
</script>

<style scoped>
    .dropper{
        border: 2px dashed black;
        height: 30vh;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .dropper:hover{
        background-color: #eee;
    }
    input{
        width: 100%;
        height: 30vh;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
    }
</style>
