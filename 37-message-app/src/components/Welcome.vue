<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name</label>
          <input type="text" id="name" name="name" v-model="name">
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
          <button class="btn teal" @click="enterChat">
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
      name: null,
      feedback: null,
    };
  },
  methods: {
    enterChat() {
      if (this.name) {
        this.$router.push({ name: 'Chat', params: { name: this.name } });
        this.feedback = null;
      } else {
        this.feedback = 'You must enter your name before enter.';
      }
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
