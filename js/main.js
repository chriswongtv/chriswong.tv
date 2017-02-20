$(document).ready(function() {
	window.addEventListener('scroll', function() {
		if ($(window).width() > 991) {
			if (window.scrollY >= (window.innerHeight - window.innerHeight * .5 - window.innerHeight * .05) &&
				window.scrollY < (window.innerHeight + window.innerHeight * .5 - window.innerHeight * .05)) {
				$("#background").removeClass("bg-cogifire").addClass("bg-about");
				$("#about").addClass("active");
			} else if (window.scrollY >= (window.innerHeight + window.innerHeight * .5 - window.innerHeight * .1) &&
						window.scrollY < (window.innerHeight * 2 + window.innerHeight * .5 - window.innerHeight * .1)) {
				$("#background").removeClass("bg-about").removeClass("bg-hackuci").addClass("bg-cogifire");
				$("#cogifire").addClass("active");
			} else if (window.scrollY >= (window.innerHeight * 2 + window.innerHeight * .5 - window.innerHeight * .1) &&
						window.scrollY < (window.innerHeight * 3 + window.innerHeight * .5 - window.innerHeight * .1)) {
				$("#background").removeClass("bg-cogifire").removeClass("bg-coolection").addClass("bg-hackuci");
				$("#hackuci").addClass("active");
			} else if (window.scrollY >= (window.innerHeight * 3 + window.innerHeight * .5 - window.innerHeight * .1) &&
						window.scrollY < (window.innerHeight * 4 + window.innerHeight * .5 - window.innerHeight * .1)) {
				$("#background").removeClass("bg-hackuci").removeClass("bg-clow").addClass("bg-coolection");
				$("#coolection").addClass("active");
			} else if (window.scrollY >= (window.innerHeight * 4 + window.innerHeight * .5 - window.innerHeight * .1) &&
						window.scrollY < (window.innerHeight * 5 + window.innerHeight * .5 - window.innerHeight * .1)) {
				$("#background").removeClass("bg-coolection").removeClass("bg-joyfeed").addClass("bg-clow");
				$("#clow").addClass("active");
			} else if (window.scrollY >= (window.innerHeight * 5 + window.innerHeight * .5 - window.innerHeight * .1) &&
						window.scrollY < (window.innerHeight * 6 + window.innerHeight * .5 - window.innerHeight * .1)) {
				$("#background").removeClass("bg-clow").removeClass("bg-contact").addClass("bg-joyfeed");
				$("#joyfeed").addClass("active");
			} else if (window.scrollY >= (window.innerHeight * 6 + window.innerHeight * .5 - window.innerHeight * .1)) {
				$("#background").removeClass("bg-joyfeed").addClass("bg-contact");
				$("#contact").addClass("active");
			} else if (window.scrollY < (window.innerHeight - window.innerHeight * .5 - window.innerHeight * .05)) {
				$("#background").removeClass("bg-about");
				$(".about").removeClass("active");
			}
		} else {
			if (window.scrollY >= (window.innerHeight - window.innerHeight * .5) &&
				window.scrollY < (window.innerHeight + window.innerHeight * .5)) {
				$("#background").removeClass("bg-cogifire").addClass("bg-about");
				$("#about").addClass("active");
			} else if (window.scrollY >= (window.innerHeight + window.innerHeight * .5) &&
						window.scrollY < (window.innerHeight * 2 + window.innerHeight * .5)) {
				$("#background").removeClass("bg-about").removeClass("bg-hackuci").addClass("bg-cogifire");
				$("#cogifire").addClass("active");
			} else if (window.scrollY >= (window.innerHeight * 2 + window.innerHeight * .5) &&
						window.scrollY < (window.innerHeight * 3 + window.innerHeight * .5)) {
				$("#background").removeClass("bg-cogifire").removeClass("bg-coolection").addClass("bg-hackuci");
				$("#hackuci").addClass("active");
			} else if (window.scrollY >= (window.innerHeight * 3 + window.innerHeight * .5) &&
						window.scrollY < (window.innerHeight * 4 + window.innerHeight * .5)) {
				$("#background").removeClass("bg-hackuci").removeClass("bg-clow").addClass("bg-coolection");
				$("#coolection").addClass("active");
			} else if (window.scrollY >= (window.innerHeight * 4 + window.innerHeight * .5) &&
						window.scrollY < (window.innerHeight * 5 + window.innerHeight * .5)) {
				$("#background").removeClass("bg-coolection").removeClass("bg-joyfeed").addClass("bg-clow");
				$("#clow").addClass("active");
			} else if (window.scrollY >= (window.innerHeight * 5 + window.innerHeight * .5) &&
						window.scrollY < (window.innerHeight * 6 + window.innerHeight * .5)) {
				$("#background").removeClass("bg-clow").removeClass("bg-contact").addClass("bg-joyfeed");
				$("#joyfeed").addClass("active");
			} else if (window.scrollY >= (window.innerHeight * 6 + window.innerHeight * .5)) {
				$("#background").removeClass("bg-joyfeed").addClass("bg-contact");
				$("#contact").addClass("active");
			} else if (window.scrollY < (window.innerHeight - window.innerHeight * .5)) {
				$("#background").removeClass("bg-about");
				$(".about").removeClass("active");
			}
		}
	});
})