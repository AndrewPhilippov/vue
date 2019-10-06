<template>
    <section class="calc-part weight">
        <h3>Enter Here your Weight</h3>
        <v-text-field v-if="type === 'number'" v-model="number" type="number" label="Number">klhklkjl</v-text-field>
        <!--        <input class="input-weight" type="number" value="" min="40" max="300">-->
    </section>
</template>

<script>
    export default {
        name: "Weight",
        data() {
            return {
                type: 'number',
                number: null,
            }
        },
        computed: {
            target() {
                const value = this[this.type]
                if (!isNaN(value)) return Number(value)
                else return value
            },
        },
    }
</script>

<style scoped>
    .weight::before {
        content: 'IV.';
    }

    .input-weight {
        font-size: 3em;
        color: #fff;
        outline: none;
        border-bottom: 1px solid #fff;
    }
</style>