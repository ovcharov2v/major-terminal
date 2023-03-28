import Swiper, { Navigation, Pagination } from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
	const slider = document.querySelector('.section-slider-terminal__slider')
	if(!slider) return

	new Swiper(slider, {
		modules: [ Navigation, Pagination ],
		slidesPerView: 3,
		spaceBetween: 32,
		grabCursor: true,
		navigation: {
			nextEl: '.slider__btn--next',
			prevEl: '.slider__btn--prev',
		},
		pagination: {
			el: '.slider__pagination',
			clickable: true,
			bulletActiveClass: 'slider__bullet--active',
			renderBullet: function (index, className) {
				return `<button class="slider__bullet swiper-pagination-bullet" aria-label="Страница ${index}"></button>`;
			},
		},
	});
})
