<template>
    <ul class="nav nav-pills">
        <li class="nav-item"><router-link to="/" class="nav-link" tag="a" active-class="active" exact>Home</router-link></li>
        <li class="nav-item"><router-link to="/user/1" class="nav-link" tag="a" active-class="active">User1</router-link></li>
        <li class="nav-item"><router-link to="/user/2" class="nav-link" tag="a" active-class="active">User2</router-link></li>
    </ul>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>