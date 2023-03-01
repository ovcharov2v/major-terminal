import Swiper, { Navigation } from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
	const slider = document.querySelector('.section-slider__slider')
	if(!slider) return

	new Swiper(slider, {
		modules: [ Navigation ],
		slidesPerView: 3,
		spaceBetween: 32,
		grabCursor: true,
		navigation: {
			nextEl: '.slider__btn--next',
			prevEl: '.slider__btn--prev',
		},
	});
})
