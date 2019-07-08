<template>
  <div class="identicon">
    <div>
      <h3>My identicon generator</h3>
      <div>
        <label for="input">
          Input:
          <input name="input" id="input" type="text" v-on:input="onInput">
        </label>
      </div>
      <div>
        Output:
      </div>
    </div>
  </div>
</template>

<script>
import jdenticon from 'jdenticon'
export default {
  data () {
    return {
      textInput: ''
    }
  },
  computed: {

  },
  name: 'identicon',
  props: {
    msg: String
  },
  methods: {
    onInput (event) {
      console.log(event.target.value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
