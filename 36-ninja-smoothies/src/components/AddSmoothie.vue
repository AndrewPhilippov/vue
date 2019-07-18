<template>
  <div class="add-smoothie container">
    <h2 class="center-align indigo-text">Add new Smoothie Recipe</h2>
    <form action="post" @submit.prevent="addSmoothie">
      <div class="field title">
        <label for="title">Smoothie Title:</label>
        <input type="text" id="title" name="title" v-model="title">
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add ingredient here:</label>
        <input @keydown.tab.prevent="addIng" v-model="another" type="text" name="add-ingredient" id="add-ingredient">
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn pink">Add Smoothie</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'AddSmoothie',
    data() {
      return {
        title: null,
        another: null,
        ingredients: [],
        feedback: null,
      };
    },
    methods: {
      addSmoothie() {
        console.log(this.title);
      },
      addIng() {
        if (this.another !== null) {
          this.ingredients.push(this.another);
          this.another = null;
          this.feedback = null;
        } else {
          this.feedback = 'You must enter a value to add an ingredient';
        }
      },
    },
  };
</script>

<style scoped>
  .add-smoothie {
    margin-top: 60px;
    padding: 20px;
    max-width: 500px;
  }

  h2 {
    font-size: 2em;
    margin: 20px auto;
  }

  .field {
    margin: 20px auto;
  }
</style>
