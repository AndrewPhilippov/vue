<template>
  <div class="chat container">
    <h2 class="center teal-text">Vue Chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <li v-for="message in messages" :key="message.id">
            <span class="teal-text name">{{ message.name }}</span>
            <span class="grey-text text-darken-3">{{ message.content }}</span>
            <span class="grey-text time">{{ message.timestamp }}</span>
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
import NewMessage from './NewMessage';
import db from '@/firebase/init';
import moment from 'moment'

export default {
  components: {
    NewMessage,
  },
  props: ['name'],
  name: 'Chat',
  data() {
    return {
      messages: [],
    };
  },
  created() {
    const ref = db.collection('messages').orderBy('timestamp');
    ref.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format('lll'),
          });
        }
      });
    });
  },
};
</script>

<style scoped lang="scss">
  .chat{
    text-align: left;
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
