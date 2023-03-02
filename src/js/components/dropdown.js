document.addEventListener('DOMContentLoaded', () => {
	const dropdownList = document.querySelectorAll('.dropdown')
	if(dropdownList.length) {
		dropdownList.forEach((dropdown) => {
			dropdown.addEventListener('click', (evt) => {
				evt.stopPropagation()
				if(!evt.target.closest(dropdown.querySelector('.dropdown__list-box'))) {
					dropdown.classList.toggle('dropdown--active')
				}
			})
			const input = dropdown.querySelector('.dropdown__value')
			const optionsList = dropdown.querySelectorAll('.dropdown__option')
			optionsList.forEach((option) => {
				option.addEventListener('click', (e) => {
					e.preventDefault();
					input.value = option.dataset.value
				})
			})
		})
	}

	document.addEventListener('click', closeAllSelect)

	function closeAllSelect() {
		dropdownList.forEach((dropdown) => {
			dropdown.classList.remove('dropdown--active')
		})
	}
})
