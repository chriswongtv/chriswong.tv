retinajs();

$(document).ready(function() {
	window.addEventListener('scroll', function() {
		if ($(window).width() > 991) {
			if (window.scrollY >= ($(window).height() - $(window).height() * .5 - $(window).height() * .05) &&
				window.scrollY < ($(window).height() + $(window).height() * .5 - $(window).height() * .2)) {
				$("#background").removeClass("bg-cogifire").addClass("bg-about");
				$("#about").addClass("active");
			} else if (window.scrollY >= ($(window).height() + $(window).height() * .5 - $(window).height() * .2) &&
						window.scrollY < ($(window).height() * 2 + $(window).height() * .5 - $(window).height() * .2)) {
				$("#background").removeClass("bg-about").removeClass("bg-hackuci").addClass("bg-cogifire");
				$("#cogifire").addClass("active");
			} else if (window.scrollY >= ($(window).height() * 2 + $(window).height() * .5 - $(window).height() * .2) &&
						window.scrollY < ($(window).height() * 3 + $(window).height() * .5 - $(window).height() * .2)) {
				$("#background").removeClass("bg-cogifire").removeClass("bg-coolection").addClass("bg-hackuci");
				$("#hackuci").addClass("active");
			} else if (window.scrollY >= ($(window).height() * 3 + $(window).height() * .5 - $(window).height() * .2) &&
						window.scrollY < ($(window).height() * 4 + $(window).height() * .5 - $(window).height() * .2)) {
				$("#background").removeClass("bg-hackuci").removeClass("bg-clow").addClass("bg-coolection");
				$("#coolection").addClass("active");
			} else if (window.scrollY >= ($(window).height() * 4 + $(window).height() * .5 - $(window).height() * .2) &&
						window.scrollY < ($(window).height() * 5 + $(window).height() * .5 - $(window).height() * .2)) {
				$("#background").removeClass("bg-coolection").removeClass("bg-joyfeed").addClass("bg-clow");
				$("#clow").addClass("active");
			} else if (window.scrollY >= ($(window).height() * 5 + $(window).height() * .5 - $(window).height() * .2) &&
						window.scrollY < ($(window).height() * 6 + $(window).height() * .5 - $(window).height() * .2)) {
				$("#background").removeClass("bg-clow").removeClass("bg-contact").addClass("bg-joyfeed");
				$("#joyfeed").addClass("active");
			} else if (window.scrollY >= ($(window).height() * 6 + $(window).height() * .5 - $(window).height() * .2)) {
				$("#background").removeClass("bg-joyfeed").addClass("bg-contact");
				$("#contact").addClass("active");
			} else if (window.scrollY < ($(window).height() - $(window).height() * .5 - $(window).height() * .05)) {
				$("#background").removeClass().addClass("bg-hero");
			}
		} else {
			if (window.scrollY >= ($(window).height() - $(window).height() * .5) &&
				window.scrollY < ($(window).height() + $(window).height() * .5)) {
				$("#background").removeClass("bg-cogifire").addClass("bg-about");
				$("#about").addClass("active");
			} else if (window.scrollY >= ($(window).height() + $(window).height() * .5) &&
						window.scrollY < ($(window).height() * 2 + $(window).height() * .5 + $(window).height() * .15)) {
				$("#background").removeClass("bg-about").removeClass("bg-hackuci").addClass("bg-cogifire");
				$("#cogifire").addClass("active");
			} else if (window.scrollY >= ($(window).height() * 2 + $(window).height() * .5 + $(window).height() * .15) &&
						window.scrollY < ($(window).height() * 3 + $(window).height() * .5 + $(window).height() * .20)) {
				$("#background").removeClass("bg-cogifire").removeClass("bg-coolection").addClass("bg-hackuci");
				$("#hackuci").addClass("active");
			} else if (window.scrollY >= ($(window).height() * 3 + $(window).height() * .5 + $(window).height() * .20) &&
						window.scrollY < ($(window).height() * 4 + $(window).height() * .5 + $(window).height() * .25)) {
				$("#background").removeClass("bg-hackuci").removeClass("bg-clow").addClass("bg-coolection");
				$("#coolection").addClass("active");
			} else if (window.scrollY >= ($(window).height() * 4 + $(window).height() * .5 + $(window).height() * .25) &&
						window.scrollY < ($(window).height() * 5 + $(window).height() * .5 + $(window).height() * .35)) {
				$("#background").removeClass("bg-coolection").removeClass("bg-joyfeed").addClass("bg-clow");
				$("#clow").addClass("active");
			} else if (window.scrollY >= ($(window).height() * 5 + $(window).height() * .5 + $(window).height() * .35) &&
						window.scrollY < ($(window).height() * 6 + $(window).height() * .5 + $(window).height() * .45)) {
				$("#background").removeClass("bg-clow").removeClass("bg-contact").addClass("bg-joyfeed");
				$("#joyfeed").addClass("active");
			} else if (window.scrollY >= ($(window).height() * 6 + $(window).height() * .5 + $(window).height() * .45)) {
				$("#background").removeClass("bg-joyfeed").addClass("bg-contact");
				$("#contact").addClass("active");
			} else if (window.scrollY < ($(window).height() - $(window).height() * .5)) {
				$("#background").removeClass().addClass("bg-hero");
			}
		}
	});
})