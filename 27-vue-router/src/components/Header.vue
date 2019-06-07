<template>
    <ul class="nav nav-pills">
        <li class="nav-item"><router-link to="/" class="nav-link" tag="a" active-class="active" exact>Home</router-link></li>
        <li class="nav-item"><router-link to="/user" class="nav-link" tag="a" active-class="active">User</router-link></li>
    </ul>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>