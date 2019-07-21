<template>
  <div class="chat container">
    <h2>Chat, hello {{ name }}</h2>
  </div>
</template>

<script>
export default {
  props: ['name'],
  name: 'Chat',
  data() {
    return {

    };
  },
};
</script>

<style scoped>

</style>
