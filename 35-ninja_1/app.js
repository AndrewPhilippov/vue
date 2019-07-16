new Vue({
   el: '#app',
    data: {
        title: 'Becoming Vue.js Ninja',
        wage: 10
    },
    methods: {
        changeWage(amount) {
            this.wage += amount
        }
    }
});
