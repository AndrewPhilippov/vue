<template>
    <section class="gender">
        <h3><span class="title-num">I. </span>Choose your gender:</h3>
        <div class="genders">
            <div class="male" @click="setMale">
                <img src="../../assets/icons/mars.svg" alt="male">
            </div>
            <label for="chooseGender">
                <input type="checkbox" name="chooseGender" id="chooseGender" hidden @change="changeGender">
                <span class="fake-checkbox"></span>
            </label>
            <div class="female" @click="setFemale">
                <img src="../../assets/icons/venus.svg" alt="female">
            </div>
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
            gender() {
                if (this.$store.state.isMale === true) {
                    return 'male'
                } else if (this.$store.state.isMale === false) {
                    return 'female'
                } else {
                    return 'Не определено';
                }
            },
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

            & .male img,
            & .female img {
                widrh: 100px;
                height: 100px;
            }
        }

        span.fake-checkbox {
            height: 20px;
            width: 50px;
            border: 3px solid #fff;
            border-radius: 20px;
            display: block;
            position: relative;

            &:after {
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                content: '';
                height: 15px;
                width: 15px;
                border: 3px solid #fff;
                border-radius: 50%;
                transition: all .3s;
            }
        }

        input#chooseGender:checked + span.fake-checkbox:after {
            left: calc(100% - 15px - 6px);
            transition: all .3s;
        }
    }
</style>