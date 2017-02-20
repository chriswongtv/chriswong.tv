// var bg = new Vue({
// 	el: '#background',
// 	data: {
// 		about: false
// 	},
// 	mounted: function() {
// 		window.addEventListener('scroll', this.mainScroll);
// 	},
// 	methods: {
// 		mainScroll: function() {
// 			
// 		},
// 	}
// })

// var hero = new Vue({
// 	el: '#hero',
// 	data: {
// 		about: false,
// 	}
// })

$(document).ready(function() {
	window.addEventListener('scroll', function() {
		if (window.scrollY >= (window.innerHeight - window.innerHeight * .5) &&
			window.scrollY < (window.innerHeight + window.innerHeight * .5)) {
			$("#background").removeClass("bg-cogifire").addClass("bg-about");
			$("#about").addClass("active");
		} else if (window.scrollY >= (window.innerHeight + window.innerHeight * .5) &&
					window.scrollY < (window.innerHeight * 2 + window.innerHeight * .5)) {
			$("#background").removeClass("bg-about").removeClass("bg-hackuci").addClass("bg-cogifire");
			$("#cogifire").addClass("active");
		} else if (window.scrollY >= (window.innerHeight * 2 + window.innerHeight * .5)) {
			$("#background").removeClass("bg-cogifire").addClass("bg-hackuci");
			$("#hackuci").addClass("active");
		} else if (window.scrollY < (window.innerHeight - window.innerHeight * .5)) {
			$("#background").removeClass("bg-about");
			$(".about").removeClass("active");
		}
	});
})