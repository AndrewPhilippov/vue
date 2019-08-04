<template>
    <div class="calc">
        <main class="main">
            <Gender/>
            <section class="weight">weight</section>
            <section class="height">height</section>
            <section class="age">age</section>
            <section class="fat">fat</section>
            <section class="activity">activity</section>
            <section class="protein">protein</section>
            <section class="results">results</section>
        </main>
    </div>
</template>

<script>
    import Gender from "./calcParts/Gender";

    export default {
        name: 'Calc',
        props: {},
        components: {
            Gender,
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .main{
        grid-template-areas:
                "gender age weight height"
                "activity carbs fats deficit"
                "result result result result";
    }
</style>
