var bg = new Vue({
	el: '#background',
	data: {
		about: false
	},
	mounted: function() {
		window.addEventListener('scroll', this.mainScroll);
	},
	methods: {
		mainScroll: function() {
			if (window.scrollY >= (window.innerHeight - window.innerHeight * .4) && !this.about) {
				this.about = true;
			} else if (window.scrollY < (window.innerHeight - window.innerHeight * .4) && this.about) {
				this.about = false;
			}
		},
	}
})

var hero = new Vue({
	el: '#hero',
	data: {
		about: false,
	}
})