new Vue({
   el: '#app',
    data: {
        title: 'Becoming Vue.js Ninja',
        name: 'Andrew'
    },
    methods: {
       updateName(e) {
           this.name = e.target.value;
       }
    }
});
