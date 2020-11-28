$(document).ready(function() {
	$('.slider').slick({
		autoplay: false,
		speed: 30,
		infinite: true,
		fade: false,
		prevArrow:$('.slider-nav__button--prev'),
		nextArrow:$('.slider-nav__button--next'),
	});
});