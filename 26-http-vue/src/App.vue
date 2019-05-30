<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>HTTP</h1>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" v-model="user.username">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="text" class="form-control" id="email" v-model="user.email">
          </div>
          <button class="btn btn-primary" @click="submit">Submit</button>
          <hr>
          <input type="text" class="form-control" v-model="node">
          <br><br>
          <button class="btn btn-primary" @click="fetchData">Get Data</button>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item" v-for="user in users">{{ user.username }} - {{ user.email }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        email: '',
      },
      users: [],
      resource: [],
      node: 'data'
    }
  },
  methods: {
    submit(){
      // this.$http.post('data.json', this.user)
      //   .then(response => {
      //     console.log(response)
      //   }, error => {
      //     console.log(error);
      //   });
      this.resource.saveAll(this.user);
    },
    fetchData(){
      // this.$http.get('data.json', this.user)
      //   .then(response => {
      //     return response.json();
      //   })
      //   .then(data => {
      //     const resultArray = [];
      //     for(let key in data){
      //       resultArray.push(data[key]);
      //     }
      //     this.users = resultArray;
      //   })
      this.resource.getData({node: this.node})
        .then(response => {
              return response.json();
            })
            .then(data => {
              const resultArray = [];
              for(let key in data){
                resultArray.push(data[key]);
              }
              this.users = resultArray;
            })
    }
  },
  created() {
    const customActions = {
      saveAll: {method: 'POST', url: 'alternative.json'},
      getData: {method: 'GET', }
    };
    this.resource = this.$resource('{node}.json', {}, customActions);
  }
}
</script>

<style lang="scss">
</style>
