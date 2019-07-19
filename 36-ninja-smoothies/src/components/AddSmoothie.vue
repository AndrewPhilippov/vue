<template>
  <div class="add-smoothie container">
    <h2 class="center-align indigo-text">Add new Smoothie Recipe</h2>
    <form action="post" @submit.prevent="addSmoothie">
      <div class="field title">
        <label for="title">Smoothie Title:</label>
        <input type="text" id="title" name="title" v-model="title">
      </div>
      <div v-for="(ing, index) in ingredients" :key="index" class="field">
        <label for="ingredient">Ingredient:</label>
        <input type="text" name="ingredient" id="ingredient" v-model="ingredients[index]">
        <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add ingredient here:</label>
        <input @keydown.tab.prevent="addIng"
               v-model="another"
               type="text"
               name="add-ingredient"
               id="add-ingredient">
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button type="submit" class="btn pink">Add Smoothie</button>
      </div>
    </form>
  </div>
</template>

<script>
import slugify from 'slugify';
import db from '@/firebase/init';

export default {
  name: 'AddSmoothie',
  data() {
    return {
      title: null,
      another: null,
      ingredients: [],
      feedback: null,
      slug: null,
    };
  },
  methods: {
    addSmoothie() {
      if (this.title) {
        this.feedback = null;
        this.slug = slugify(this.title, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true,
        });
        console.log(this.slug);
        db.collection('smoothies')
          .add({
            title: this.title,
            ingredients: this.ingredients,
            slug: this.slug,
          })
          .then(() => {
            this.$router.push({ name: 'home' });
          })
          .catch(err => console.log(err));
      } else {
        this.feedback = 'You must enter a smoothie title';
      }
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
    deleteIng(ing) {
      this.ingredients = this.ingredients.filter(ingredient => ingredient !== ing);
    },
  },
};
</script>

<style scoped lang="scss">
  .add-smoothie {
    margin-top: 60px;
    padding: 20px;
    max-width: 500px;

    & h2 {
      font-size: 2em;
      margin: 20px auto;
    }

    & .field {
      margin: 20px auto;
      position: relative;
    }

    & .delete {
      position: absolute;
      bottom: 16px;
      color: #aaa;
      right: 0;
      font-size: 1.4em;
      cursor: pointer;
    }
  }
</style>
