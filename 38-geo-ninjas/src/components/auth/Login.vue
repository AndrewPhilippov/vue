<template>
  <div>
    <Navbar />
    <div class="login container">
      <form @submit.prevent="login" class="card-panel">
        <h2 class="center deep-purple-text">Login</h2>
        <div class="field">
          <label for="email">Email: </label>
          <input type="text" name="email" v-model="email">
        </div>
        <div class="field">
          <label for="password">Password</label>
          <input type="password" name="password" v-model="password">
        </div>
        <p class="red-text center" v-if="feedback">{{ feedback }}</p>
        <div class="field">
          <button class="btn deep-purple">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import Navbar from '../layouts/Navbar.vue';

export default {
  data() {
    return {
      email: null,
      password: null,
      feedback: null,
    };
  },
  components: {
    Navbar,
  },
  name: 'Login',
  methods: {
    login() {
      if (this.email && this.password) {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then((response) => {
            console.log(response.user);
            this.$router.push({ name: 'home' });
          })
          .catch((err) => {
            console.log(err);
            this.feedback = err.message;
          });
        this.feedback = null;
      } else {
        this.feedback = 'Please fill in both fields';
      };
    },
  },
};
</script>

<style scoped lang="scss">
  .login{
    max-width: 400px;
    margin-top: 60px;
    h2 {
      font-size: 2.4em;
    }
    .field {
      margin-bottom: 16px;
    }
  }
</style>
