new Vue({
    el: "#app",
    data:{
        color: 'gray',
        width: 100 + 'px'
    },
    computed: {
        myStyle: function(){
            return {
                backgroundColor: this.color,
                width: this.width + 'px'
            }
        }
    }
});