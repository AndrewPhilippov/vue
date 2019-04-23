new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            alert: function(){
                alert("Hello!")
            },
            getValue: function(e){
                this.value = e.target.value;
            }
        }
    });