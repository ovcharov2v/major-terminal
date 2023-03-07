document.addEventListener('DOMContentLoaded', () => {
	const header = document.querySelector('.header')
	const searchFormToggle = document.querySelectorAll('.js-search-toggle')
	searchFormToggle.forEach((btn) => {
		btn.addEventListener('click', () => {
			if(header.classList.contains('header--search-shown')) {
				header.classList.remove('header--search-shown')
				setTimeout(()=>{
					header.classList.remove('header--search-show')
				}, 300)
			}
			else {
				header.classList.add('header--search-show')
				setTimeout(()=>{
					header.classList.add('header--search-shown')
				}, 50)
			}
		})
	})
})
