const data = {
  title: 'The VueJS Instance',
  showParagraph: false
};
Vue.component('hello', {
  template: '<h1>Hello, I am new component!</h1>'
});

const vm1 = new Vue({
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      this.$refs.myButton.innerText = 'Test me'
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

vm1.$mount('#app1');
vm1.$refs.heading.innerText = 'Something else';

setTimeout(function(){
  vm1.title = 'Changed by timer';
  vm1.show();
}, 3000);

const vm2 = new Vue({
  el: "#app2",
  data: {
    title: 'The second instance'
  },
  methods: {
    onChange: function(){
      vm1.title = 'Changed';
    }
  }
});
const vm3 = new Vue({
  template: '<h1>Hello, i am self made template heading</h1>'
});
// vm3.$mount('#app3');
//Or we also can use regular JS
vm3.$mount();
document.getElementById("app3").appendChild(vm3.$el);