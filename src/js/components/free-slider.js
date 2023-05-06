import Swiper from 'swiper';

let freeSlider

document.addEventListener('DOMContentLoaded', initFreeSlider)


window.addEventListener('resize', initFreeSlider, true);


function initFreeSlider() {
	const slider = document.querySelector('.free-slider')
	if (!slider) return

	const width = window.innerWidth

	if (width > 1400) {
		if (freeSlider !== undefined) {
			freeSlider.destroy(true, true)
			freeSlider = undefined
		}
	} else {
		if (freeSlider === undefined) {
			freeSlider = new Swiper(slider, {
				slidesPerView: "auto",
				spaceBetween: 28,
				grabCursor: true,
				freeMode: true,
				breakpoints: {
					700: {
						spaceBetween: 50,
					}
				}
			})
		}

	}
}
