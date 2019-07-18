<template>
  <div class="index container">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteSmoothie(smoothie.id)">delete</i>
        <h2 class="indigo-text">{{ smoothie.title }}</h2>
        <ul class="ingredients">
          <li v-for="(ingredient, index) in smoothie.ingredients" :key="index">
            <span class="chip">{{ ingredient }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      smoothies: [
        {
          title: 'Ninja Brew',
          slug: 'ninja-brew',
          ingredients: ['bananas', 'coffee', 'milk'],
          id: 1,
        },
        {
          title: 'Morning Mood',
          slug: 'morning-mood',
          ingredients: ['mango', 'lime', 'juice'],
          id: 2,
        },
      ],
    };
  },
  methods: {
    deleteSmoothie(id) {
      this.smoothies = this.smoothies.filter(smoothie => smoothie.id !== id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .index {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    margin-top: 30px;

    & h2 {
      font-size: 1.8em;
      text-align: center;
      margin-top: 0;
    }

    & .ingredients {
      margin: 30px auto;
      display: flex;

      & li {

      }
    }
    & .delete {
      position: absolute;
      top: 4px;
      right: 4px;
      cursor: pointer;
      color: #aaa;
      font-size: 1.4em;
    }
  }
</style>
