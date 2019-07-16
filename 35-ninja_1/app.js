new Vue({
   el: '#app',
    data: {
        title: 'Becoming Vue.js Ninja',
        coords: {
            x: null,
            y: null,
        }
    },
    methods: {
        logEvent(e) {
            console.log(e);
        },
        logCoords(e) {
            this.coords.x = e.offsetX;
            this.coords.y = e.offsetY;
        }
    }
});
