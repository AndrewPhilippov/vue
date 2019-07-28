<template>
    <div class="calc">
        <p>
            <label>
                <input :gender="gender" type="checkbox" @change="changeGender" />
                <span>{{ gender }}</span>
            </label>
        </p>

    </div>
</template>

<script>
    export default {
        name: 'Calc',
        computed: {
            gender() {
                return this.$store.getters.getCurrentGender;
            }
        },
        methods: {
            changeGender() {
                console.log('gender was changed');
                this.$store.commit('changeGender')
            }
        }
    }
</script>
<style scoped>
</style>
