document.addEventListener('DOMContentLoaded', () => {
	const navList = document.querySelectorAll('.mobile-nav__nav-title')

	navList.forEach((nav) => {
		nav.addEventListener('click', (e) => {
			e.preventDefault()
			nav.parentNode.classList.toggle('mobile-nav__mobile-nav-block--active')
		})
	})
})
