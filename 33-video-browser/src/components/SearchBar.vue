<template>
    <div>
        <label for="">
            <input type="text" @input="onInput">
        </label>
    </div>
</template>
<script>
    export default {
        name: 'SearchBar',
        methods: {
            onInput (e) {
                this.$emit('termChange', e.target.value)
            }
        }
    }
</script>
<style></style>
