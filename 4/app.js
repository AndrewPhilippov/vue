new Vue({
    el: '#app',
    data: {
        counter: 0,
        step: 5,
        x: 0,
        y: 0
    },
    methods: {
        increase: function(step, event){
            this.counter += this.step;
        },
        updateCoordinates: function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe: function(event){
            return alert(document.querySelector("input").value);
        }
    }
});