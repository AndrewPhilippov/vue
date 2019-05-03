<template>
    <div>
        <h3>New Quote: </h3>
        <button @click="counter++">{{ counter }}</button>
    </div>
</template>
<script>
    export default {
        data: function(){
            return {
                counter: 0
            }
        },
        destroyed() {
            console.log('destrooooo-ooo-o-o-o-ooo-o-o-oo-o-o-o-o--o-o-o-o--ooo-o-o-oo-yed!!!')
        },
        deactivated(){
            console.log('Deactivated');
        },
        activated() {
            console.log('It\'s alive!!!')
        }
    }
</script>
<style scoped>
</style>