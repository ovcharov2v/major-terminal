import Swiper, { Navigation, Pagination } from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
	const slider = document.querySelector('.section-terminals__slider')
	if(!slider) return

	const createTerminalSlider = () => {
		const slides = slider.querySelectorAll('.slider__slide')
		console.log(slides)
		if(slides && slides.length > 1) {
			slider.classList.remove('slider--disabled')
			new Swiper(slider, {
				modules: [ Navigation, Pagination ],
				slidesPerView: 1,
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
		}
		else {
			slider.classList.add('slider--disabled')
		}
	}

	createTerminalSlider()
})
