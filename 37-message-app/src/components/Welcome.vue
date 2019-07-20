<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name</label>
          <input type="text" id="name" name="name" v-model="name">
          <button class="btn teal">
            <router-link :to="{ name: 'Chat' }" class="white-text">Enter Chat</router-link>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {
      name: '',
    };
  },
  methods: {
    enterChat() {
      console.log(this.name);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .welcome{
    max-width: 400px;
    margin-top: 100px;
    h2 {
      font-size: 3em;
    }
    button{
      margin: 30px auto;
    }
  }
</style>
