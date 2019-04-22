new Vue({
    el: '#exercise',
    data: {
        name: 'Andrew',
        age: 32,
        link: 'https://www.hugeserver.com/kb/wp-content/uploads/2018/01/vuejslogo.jpg'
    },
    methods: {
        multipliedByThree: function(){
            return this.age*3;
        },
        randomNum: function(){
            return Math.random()
        }
    }
});