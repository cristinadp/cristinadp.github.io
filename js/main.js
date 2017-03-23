$(window).on("scroll", function () {
	var distanceScrolled = $(window).scrollTop();
	console.log("The distance scrolled is " + distanceScrolled);

if (distanceScrolled <= 608) {
	$(".navbar-default").addClass("navbar-transparent");
} else {
	$(".navbar-default").removeClass("navbar-transparent");
}

if (distanceScrolled >= 608) {
	$(".navbar-default").addClass("navbar-convert");
	$("ul a").css("color", "#525c65");
	$(".navbar-brand").css("color", "#525c65");
} else {
	$(".navbar-default").removeClass("navbar-convert");
	$("ul a").css("color", "white");
	$(".navbar-brand").css("color", "white");
}


if (distanceScrolled >= 1700) {
	$(".testimonials-wrapper").addClass("animate-testimonials");
} else {
	$(".testimonials-wrapper").removeClass("animate-testimonials");
}
}); 

 







