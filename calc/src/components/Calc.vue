<template>
  <div class="calc">
    <label for="gender">{{ gender }}</label>
    <input type="checkbox" name="gender" id="gender" :gender="gender" v-model="gender">
  </div>
</template>

<script>
export default {
  name: 'Calc',
  data() {
    return {
      gender: false,
      age: null,
      height: null,
      weight: null,
      activityLvl: null,
      bodyFatPercentage: null,
      proteinChosen: null,
      carbsChosen: null,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
