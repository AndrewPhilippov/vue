<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">Stock Trader</router-link>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <router-link
                        class="nav-item"
                        tag="li"
                        exact activeClass="active"
                        to="/portfolio" >
                    <a class="nav-link">Portfolio<span class="sr-only">(current)</span></a>
                </router-link>
                <router-link
                        class="nav-item"
                        tag="li"
                        exact activeClass="active"
                        to="/stocks" >
                    <a class="nav-link">Stocks<span class="sr-only">(current)</span></a>
                </router-link>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Save & Load
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Save</a>
                        <a class="dropdown-item" href="#">Load</a>
                    </div>
                </li>
            </ul>
        </div>
        <strong class="navbar ml-auto navbar-text text-success">Funds: {{ funds | currency}}</strong>
        <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03"
                aria-expanded="false"
                aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    </nav>
</template>

<script>
    export default {
        name: "Header",
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        }
    }
</script>

<style scoped>

</style>
