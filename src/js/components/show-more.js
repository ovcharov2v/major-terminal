document.addEventListener('DOMContentLoaded', () => {
	const showMore = document.querySelector('.show-more')
	const showMoreBtn = document.querySelector('.show-more__button')
	if(!showMore || !showMoreBtn) return

	showMoreBtn.addEventListener('click', () => {
		showMore.classList.toggle('show-more--active')
	})
})
