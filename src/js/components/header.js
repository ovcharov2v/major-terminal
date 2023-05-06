document.addEventListener('DOMContentLoaded', () => {
	const header = document.querySelector('.header')
	const searchFormToggle = document.querySelectorAll('.js-search-toggle')
	searchFormToggle.forEach((btn) => {
		btn.addEventListener('click', () => {
			if (header.classList.contains('header--search-shown')) {
				header.classList.remove('header--search-shown')
				setTimeout(() => {
					header.classList.remove('header--search-show')
				}, 300)
			} else {
				header.classList.add('header--search-show')
				setTimeout(() => {
					header.classList.add('header--search-shown')
				}, 50)
			}
		})
	})

	const burger = header.querySelector('.header__burger-btn')
	burger.addEventListener('click', () => {
		if (header.classList.contains('header--menu-show')) {
			header.classList.remove('header--menu-shown')
			setTimeout(() => {
				header.classList.remove('header--menu-show')
				document.documentElement.classList.remove('overflow-hidden')
			}, 300)
		} else {
			header.classList.add('header--menu-show')
			document.documentElement.classList.add('overflow-hidden')

			setTimeout(() => {
				header.classList.add('header--menu-shown')
			})
		}
	})

	const menuElems = document.querySelectorAll('.header__mobile-menu-elem')
	menuElems.forEach((elem) => {
		elem.addEventListener('click', () => {
			if (elem.classList.contains('header__mobile-menu-elem--active')) {
				elem.classList.remove('header__mobile-menu-elem--active')
			} else {
				const active = header.querySelector('.header__mobile-menu-elem--active')
				if (active) {
					active.classList.remove('header__mobile-menu-elem--active')
				}
				elem.classList.add('header__mobile-menu-elem--active')
			}
		})
	})
})
