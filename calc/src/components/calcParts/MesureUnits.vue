<template>
    <section class="mesure-units">
        <h3>Choose your preferable metric units</h3>
        <div class="choose-units">
            <v-icon dark large @click="setMetric">mdi-weight-kilogram</v-icon>
            <label for="chooseUnit">
                <input type="checkbox" name="chooseUnit" id="chooseUnit" hidden @change="changeUnits">
                <span class="fake-checkbox"></span>
            </label>
            <v-icon dark large @click="setImperial">mdi-weight-pound</v-icon>
        </div>
    </section>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {

        name: "MesureUnits",
        data() {
            return {
                tooltip: 'Please, select units of measure to calculate your macros',
            }
        },
        methods: {
            ...mapActions([
                'changeUnits',
            ]),
            setMetric() {
                document.getElementById('chooseUnit').checked = false;
                return this.$store.dispatch('setMetric');
            },
            setImperial() {
                document.getElementById('chooseUnit').checked = true;
                return this.$store.dispatch('setImperial');
            },
        }
    }
</script>

<style scoped>
    .choose-units{
        display: flex;
        align-items: center;
        width: 250px;
        justify-content: space-between;
    }
</style>