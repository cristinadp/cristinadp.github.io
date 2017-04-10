$(window).on("scroll", function () {
	var distanceScrolled = $(window).scrollTop();
	console.log("The distance scrolled is " + distanceScrolled);

if (distanceScrolled >= 580) {
	$(".magic-navbar").addClass("navbar-appear");
	$(".signup-style").addClass("signup-magic");
} else {
	$(".magic-navbar").removeClass("navbar-appear");
	$(".signup-style").removeClass("signup-magic");
}


if (distanceScrolled >= 1350) {
	$(".testimonials-wrapper").addClass("animate-testimonials");
} else {
	$(".testimonials-wrapper").removeClass("animate-testimonials");
}

}); 
 

// classroom 
$(".close").on("click", function() {
$("nav").addClass("box1");
});

$(".hamburger").on("click", function() {
$("nav").removeClass("box1");
$("nav").addClass("sidebar");
});








