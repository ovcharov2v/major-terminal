document.addEventListener('DOMContentLoaded', () => {
	const navList = document.querySelectorAll('.mobile-nav__nav-title')

	navList.forEach((nav) => {
		nav.addEventListener('click', (e) => {
			if (nav.tagName === 'SPAN') {
				nav.parentNode.classList.toggle('mobile-nav__mobile-nav-block--active')
			}
		})
	})
})
