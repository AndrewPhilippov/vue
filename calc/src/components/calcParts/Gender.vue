<template>
    <section class="calc-part gender">
        <h3>Choose your gender</h3>
        <div class="genders">
            <v-icon dark large @click="setMale">mdi-gender-male</v-icon>
            <label for="chooseGender">
                <input type="checkbox" name="chooseGender" id="chooseGender" hidden @change="changeGender">
                <span class="fake-checkbox"></span>
            </label>
            <v-icon dark large @click="setFemale">mdi-gender-female</v-icon>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Gender",
        data() {
            return {
                tooltip: 'Please, select your gender first',
            }
        },
        computed: {
            isMale() {
                return this.$store.state.isMale === true;
            },
            isFemale() {
                return this.$store.state.isMale !== true;
            }
        },
        methods: {

            changeGender() {
                return this.$store.dispatch('changeGender');
            },
            setMale() {
                document.getElementById('chooseGender').checked = false;
                return this.$store.dispatch('setMale');
            },
            setFemale() {
                document.getElementById('chooseGender').checked = true;
                return this.$store.dispatch('setFemale');
            },
        },
    }
</script>

<style scoped lang="scss">
    .gender {
        .genders {
            display: flex;
            width: 250px;
            align-items: center;
            justify-content: space-between;
        }
        &.calc-part::before {
            content: "II.";
        }
    }
</style>