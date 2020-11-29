$(document).ready(function() {
	$('.slider').slick({
		autoplay: true,
		speed: 3000,
		infinite: true,
		fade: true,
		pauseOnHover: false,
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

	var contact = document.querySelector('.js-modal');
	var modal = document.querySelector('.modal');
	var close = document.querySelector('.modal__close-button');
	var overlay = document.querySelector('.js-overlay');
	contact.addEventListener('click', function(){
		modal.classList.remove('modal-close');
		modal.classList.add('modal-open');
		overlay.classList.add('color-overlay');
	});
	close.addEventListener('click', function(){
		modal.classList.remove('modal-open');
		modal.classList.add('modal-close');
		overlay.classList.remove('color-overlay');
	});
});