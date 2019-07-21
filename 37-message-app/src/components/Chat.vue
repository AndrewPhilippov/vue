<template>
  <div class="chat container">
    <h2 class="center teal-text">Vue Chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <li>
            <span class="teal-text name">Name</span>
            <span class="grey-text text-darken-3">Message</span>
            <span class="grey-text time">Time</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NewMessage :name="name" />
      </div>
    </div>
  </div>
</template>

<script>
import NewMessage from './NewMessage'
export default {
  props: ['name'],
  name: 'Chat',
  data() {
    return {

    };
  },
  components: {
    NewMessage,
  }
};
</script>

<style scoped lang="scss">
  .chat{
    h2 {
      font-size: 2.6em;
      margin-bottom: 40px;
    }
    & span{
      font-size: 1.4em;
    }
    & .name{
      display: block;
    }
    & .time{
      display: block;
      font-size: .8em;
    }
  }
</style>
