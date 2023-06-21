document.addEventListener('DOMContentLoaded', () => {
	const footerNavs = document.querySelectorAll('.footer__nav-title')

	footerNavs.forEach((nav) => {
		nav.addEventListener('click', (e) => {
			e.preventDefault()
			nav.parentNode.classList.toggle('footer__mobile-nav-block--active')
		})
	})
})
