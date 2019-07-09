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
        <div v-html="identicon"></div>
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
    identicon () {
      return jdenticon.toSvg(this.textInput, 200)
    }
  },
  name: 'identicon',
  props: {
    msg: String
  },
  methods: {
    onInput (event) {
      this.textInput = event.target.value
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
