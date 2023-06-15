document.addEventListener("DOMContentLoaded", function () {
	const linkList = document.querySelectorAll('*[data-scroll-to]')
	if (!linkList.length) return

	linkList.forEach((link) => {
		link.addEventListener('click', (evt) => {
			evt.preventDefault()
			const target = document.querySelector(`#${link.dataset.scrollTo}`)
			if(target) {
				target.scrollIntoView({
					behavior: 'smooth'
				})
			}
		})
	})
});
