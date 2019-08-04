<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
    html{
        font-size: 62.5%; // Grab 10 px out of 16. Now 1em === 10px;
        font-family: 'Poiret One', sans-serif;
        font-weight: 400;
        color: #fff;
    }
    #app{
        background-color: darkblue;
        display: grid;
    }
</style>
