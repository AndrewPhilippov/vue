<template>
    <div class="calc">
        <main class="main">
            <MeasureUnits/>
            <Gender/>
            <Age/>
            <Weight/>
            <BodyFat/>
            <Height/>
            <Carbs/>
            <Fats/>
            <Activity/>
            <Protein/>
            <Result/>
            <Deficit/>
        </main>
    </div>
</template>

<script>
    import Gender from "./calcParts/Gender";
    import Weight from "./calcParts/Weight";
    import Height from "./calcParts/Height";
    import Age from "./calcParts/Age";
    import Fats from "./calcParts/Fats";
    import Activity from "./calcParts/Activity";
    import Protein from "./calcParts/Protein";
    import Result from "./calcParts/Result";
    import Carbs from "./calcParts/Carbs";
    import BodyFat from "./calcParts/BodyFat";
    import MeasureUnits from "./calcParts/MeasureUnits";
    import Deficit from "./calcParts/Deficit";

    export default {
        name: 'Calc',
        props: {},
        components: {
            MeasureUnits,
            BodyFat,
            Carbs,
            Deficit,
            Gender,
            Weight,
            Height,
            Age,
            Fats,
            Activity,
            Protein,
            Result,
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .main{
        display: grid;
        grid-template-areas:
                "munits munits munits munits"
                "gender age weight height"
                "protein bodyfat bodyfat activity"
                "carbs fats fats deficit"
                "result result result result";
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: auto;
    }
    .main > * {
        margin: 20px;
    }
    .mesure-units{
        grid-area: munits;
    }
    .gender{
        grid-area: gender;
    }
    .age{
        grid-area: age;
    }
    .weight{
        grid-area: weight;
    }
    .height{
        grid-area: height;
    }
    .body-fat{
        grid-area: bodyfat;
    }
    .activity{
        grid-area: activity;
    }
    .carbs{
        grid-area: carbs;
    }
    .fats{
        grid-area: fats;
    }
    .deficit{
        grid-area: deficit;
    }
    .result{
        grid-area: result;
    }
</style>
