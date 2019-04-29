new Vue({
    el: "#app",
    data: {
        title: 'The Vue.js instance'
    },
    beforeCreate: function(){
        console.log('beforeCreate()' + ' ' + new Date().getMilliseconds());
    },
    created: function(){
        console.log('created()' + ' ' + new Date().getMilliseconds());
    },
    beforeMount: function(){
        console.log('beforeMount()' + ' ' + new Date().getMilliseconds());
    },
    mounted: function(){
        console.log('mounted()' + ' ' + new Date().getMilliseconds());
    },
    beforeUpdate: function(){
        console.log('beforeUpdate()' + ' ' + new Date().getMilliseconds());
    },
    updated: function(){
        console.log('updated()' + ' ' + new Date().getMilliseconds());
    },
    beforeDestroy: function(){
        console.log('beforeDestroy()' + ' ' + new Date().getMilliseconds());
    },
    destroyed: function(){
        console.log('destroyed()' + ' ' + new Date().getMilliseconds());
    },
    methods: {
        destroy: function(){
            this.$destroy();
        }
    }
})