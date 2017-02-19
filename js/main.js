var hero = new Vue({
	el: '#hero',
	data: {
		topbar: false,
	},
	mounted: function() {
		window.addEventListener('scroll', this.mainScroll);
	},
	methods: {
		mainScroll: function() {
			if (window.scrollY > 0 && !this.topbar) {
				this.topbar = true;
			} else if (window.scrollY === 0 && this.topbar) {
				this.topbar = false;
			}
		},
	}
})