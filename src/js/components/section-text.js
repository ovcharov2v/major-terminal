document.addEventListener('DOMContentLoaded', () => {
	const sectionText = document.querySelector('.section-text')
	const cutBtn = document.querySelector('.section-text__cut-button')
	if(!cutBtn) return

	cutBtn.addEventListener('click', () => {
		sectionText.classList.toggle('section-text--active')
	})
})
