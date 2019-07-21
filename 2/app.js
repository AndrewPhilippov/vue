// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
	el: '#app',
	data: {
		title: 'Hello World!',
		link: 'http://google.com',
		finishedLink: '<a href="http://google.com">Google</a>'
	},
	methods: {
		sayHello: function(){
			this.title = 'Hello!';
			return this.title;
		}
	}
})
