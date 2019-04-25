new Vue({
    el: "#app",
    data: {
        counter: 0,
        result: ''
    },
    methods: {
        increase: function(){
            this.counter++;
            this.result = this.counter > 5 ? 'Greater 5' : 'Lower 5'
        },
        decrease: function(){
            this.counter--;
            this.result = this.counter > 5 ? 'Greater 5' : 'Lower 5'
        }
    }
})