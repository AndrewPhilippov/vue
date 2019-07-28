<template>
    <nav :class="[ gender ? ' indigo darken-3' : 'purple accent-4' ]">
        <div class="nav-wrapper container">
            <a href="#" class="brand-logo center">Keto Calculator</a>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navar",
        computed: {
            gender() {
                return this.$store.getters.getCurrentGender;
            }
        }
    }
</script>

<style scoped>

</style>