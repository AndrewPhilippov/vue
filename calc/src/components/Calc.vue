<template>
    <div class="calc">
        <main class="main">
            <MesureUnits/>
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
    import MesureUnits from "./calcParts/MesureUnits";

    export default {
        name: 'Calc',
        props: {},
        components: {
            MesureUnits,
            BodyFat,
            Carbs,
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
                ". bodyfat bodyfat ."
                "activity carbs fats deficit"
                "result result result result";
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: auto;
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
        grid-area: dificit;
    }
    .result{
        grid-area: result;
    }
</style>
