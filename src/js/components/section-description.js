import Swiper, { Navigation, Pagination } from 'swiper';

let sectionDescriptionPanelSlider
let sectionDescriptionPhotoSlider

document.addEventListener('DOMContentLoaded',() => {
	initSectionDescriptionPanelSlider();
	initSectionDescriptionPhotoSlider();
} )


window.addEventListener('resize', () => {
	initSectionDescriptionPanelSlider();
	initSectionDescriptionPhotoSlider();
}, true);


function initSectionDescriptionPanelSlider() {
	const slider = document.querySelector('.section-description__panel-slider')
	if (!slider) return

	const width = window.innerWidth

	if (width > 1200) {
		if (sectionDescriptionPanelSlider !== undefined) {
			sectionDescriptionPanelSlider.destroy(true, true)
			sectionDescriptionPanelSlider = undefined
		}
	} else {
		if (sectionDescriptionPanelSlider === undefined) {
			sectionDescriptionPanelSlider = new Swiper(slider, {
				modules: [ Navigation, Pagination ],
				slidesPerView: "auto",
				spaceBetween: 28,
				grabCursor: true,
				freeMode: true,
				breakpoints: {
					700: {
						spaceBetween: 50,
					}
				},
				navigation: {
					nextEl: '.slider__nav--panel .slider__btn--next',
					prevEl: '.slider__nav--panel .slider__btn--prev',
				},
				pagination: {
					el: '.slider__nav--panel .slider__pagination',
					clickable: true,
					bulletActiveClass: 'slider__bullet--active',
					renderBullet: function (index, className) {
						return `<button class="slider__bullet swiper-pagination-bullet" aria-label="Страница ${index}"></button>`;
					},
				},
			})
		}

	}
}

function initSectionDescriptionPhotoSlider() {
	const slider = document.querySelector('.section-description__photo-slider')
	if (!slider) return
	const width = window.innerWidth

	if (width > 1200) {
		if (sectionDescriptionPhotoSlider !== undefined) {
			sectionDescriptionPhotoSlider.destroy(true, true)
			sectionDescriptionPhotoSlider = undefined
		}
	} else {
		if (sectionDescriptionPhotoSlider === undefined) {
			sectionDescriptionPhotoSlider = new Swiper(slider, {
				modules: [ Navigation, Pagination ],
				slidesPerView: "auto",
				spaceBetween: 28,
				grabCursor: true,
				freeMode: true,
				breakpoints: {
					700: {
						spaceBetween: 50,
					}
				},
				navigation: {
					nextEl: '.slider__nav--photo .slider__btn--next',
					prevEl: '.slider__nav--photo .slider__btn--prev',
				},
				pagination: {
					el: '.slider__nav--photo .slider__pagination',
					clickable: true,
					bulletActiveClass: 'slider__bullet--active',
					renderBullet: function (index, className) {
						return `<button class="slider__bullet swiper-pagination-bullet" aria-label="Страница ${index}"></button>`;
					},
				},
			})
		}

	}
}
