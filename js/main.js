$(document).ready(function() {
	$('.slider').slick({
		autoplay: false,
		speed: 30,
		infinite: true,
		fade: false,
		prevArrow:$('.slider-nav__button--prev'),
		nextArrow:$('.slider-nav__button--next'),
	});

	$('.gallery__slider').slick({
		autoplay: true,
		speed: 300,
		infinite: true,
		slidesToShow: 3,
		prevArrow:$('.gallery__slider-nav .slider-nav__button--prev'),
		nextArrow:$('.gallery__slider-nav .slider-nav__button--next'),
	});

	$('.gallery__slider-item-image').magnificPopup({
		type: 'image',
	});
});