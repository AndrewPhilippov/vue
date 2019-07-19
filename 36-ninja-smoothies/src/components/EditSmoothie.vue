<template>
<div v-if="smoothie" class="container edit-smoothie">
  <h2>Edit {{ smoothie.title }} smoothie</h2>
  <form action="post" @submit.prevent="editSmoothie">
    <div class="field title">
      <label for="title">Smoothie Title:</label>
      <input type="text" id="title" name="title" v-model="smoothie.title">
    </div>
    <div v-for="(ing, index) in smoothie.ingredients" :key="index" class="field">
      <label for="ingredient">Ingredient:</label>
      <input type="text" name="ingredient" id="ingredient" v-model="smoothie.ingredients[index]">
      <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
    </div>
    <div class="field add-ingredient">
      <label for="add-ingredient">Update ingredient here:</label>
      <input @keydown.tab.prevent="addIng"
             v-model="another"
             type="text"
             name="add-ingredient"
             id="add-ingredient">
    </div>
    <div class="field center-align">
      <p v-if="feedback" class="red-text">{{ feedback }}</p>
      <button type="submit" class="btn pink">Edit Smoothie</button>
    </div>
  </form>
</div>
</template>

<script>
import slugify from 'slugify';
import db from '@/firebase/init';

export default {
  name: 'EditSmoothie',
  data() {
    return {
      smoothie: null,
      another: null,
      feedback: null,
    };
  },
  created() {
    const ref = db.collection('smoothies').where('slug', '==', this.$route.params.smoothie_slug);
    ref.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        this.smoothie = doc.data();
        this.smoothie.id = doc.id;
      });
    });
  },
  methods: {
    editSmoothie() {
      if (this.smoothie.title) {
        this.feedback = null;
        this.smoothie.slug = slugify(this.smoothie.title, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true,
        });
        console.log(this.slug);
        db.collection('smoothies')
          .doc(this.smoothie.id)
          .update({
            title: this.smoothie.title,
            ingredients: this.smoothie.ingredients,
            slug: this.smoothie.slug,
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
      if (this.another) {
        this.smoothie.ingredients.push(this.another);
        this.another = null;
        this.feedback = null;
      } else {
        this.feedback = 'You must enter a value to add an ingredient';
      }
    },
    deleteIng(ing) {
      // eslint-disable-next-line max-len
      this.smoothie.ingredients = this.smoothie.ingredients.filter(ingredient => ingredient !== ing);
    },
  },
};
</script>

<style scoped lang="scss">
  .edit-smoothie {
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
