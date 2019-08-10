<template>
    <section class="calc-part age">
        <h3>Enter your birthday</h3>
        <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
                color="#fff"
        >
            <template v-slot:activator="{ on }">
                <v-text-field
                        v-model="date"
                        label="Birthday date"
                        prepend-icon="event"
                        readonly
                        v-on="on"
                        dark
                ></v-text-field>
            </template>
            <v-date-picker
                    ref="picker"
                    v-model="date"
                    :max="new Date().toISOString().substr(0, 10)"
                    min="1930-01-01"
                    @change="handler(save, getCurrentAge)"
                    color="rgba(100, 0, 255, 0.8)"
            ></v-date-picker>
        </v-menu>
    </section>
</template>

<script>
    export default {
        name: "Age",
        data() {
            return {
                date: null,
                menu: false,
                currentAge: null,
            }
        },
        watch: {
            menu (val) {
                val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'));
            },
        },
        methods: {
            save (date) {
                this.$refs.menu.save(date)
            },
            getCurrentAge () {
                const now = new Date().getUTCFullYear();
                const birthDate = new Date(this.date).getUTCFullYear();
                return this.currentAge = now - birthDate;
            },
            handler(arg1, arg2) {
                arg1();
                arg2();
            }
        },
    }
</script>

<style scoped lang="scss">
    .age::before{
        content: 'III.';
    }
</style>