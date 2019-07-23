<template>
  <div>
    <Navbar/>
    <div class="signup container">
      <form class="card-panel" @submit.prevent="signup">
        <h2 class="center deep-purple-text">Signup</h2>

        <div class="field">
          <label for="email">Email: </label>
          <input type="text" name="email" v-model="email">
        </div>
        <div class="field">
          <label for="password">Password</label>
          <input type="password" name="password" v-model="password">
        </div>
        <div class="field">
          <label for="alias">Alias: </label>
          <input type="text" name="alias" v-model="alias">
        </div>
        <div class="field center">
          <button class="btn deep-purple">Signup</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from '../layouts/Navbar';

export default {
  name: 'Signup',
  components: { Navbar },
  data() {
    return {
      email: null,
      password: null,
      alias: null,
    };
  },
  methods: {
    signup() {

    }
  }
};
</script>

<style scoped lang="scss">
  .signup{
    width: 400px;
    margin-top: 60px;
    h2 {
      font-size: 2.4em;
    }
    .field {
      margin-bottom: 16px;
    }
  }
</style>
