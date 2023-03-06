document.addEventListener('DOMContentLoaded', () => {
	const dropdownList = document.querySelectorAll('.dropdown')
	if(dropdownList.length) {
		dropdownList.forEach((dropdown) => {
			// Multi select
			if(dropdown.classList.contains('dropdown--multi-select')) {
				const counter = dropdown.querySelector('.dropdown__value-counter')
				dropdown.addEventListener('click', (evt) => {
					evt.stopPropagation()
					if(!evt.target.closest('.dropdown__options-list')) {
						dropdown.classList.toggle('dropdown--active')
					}
					else {
						const checkedOptions = dropdown.querySelectorAll(':checked').length;
						counter.innerHTML = checkedOptions.toString()
					}
				})
			}
			// Single select
			else {
				dropdown.addEventListener('click', (evt) => {
					evt.stopPropagation()
					dropdown.classList.toggle('dropdown--active')
				})
				const input = dropdown.querySelector('.dropdown__value')
				const optionsList = dropdown.querySelectorAll('.dropdown__option')
				optionsList.forEach((option) => {
					option.addEventListener('click', (e) => {
						e.preventDefault();
						input.value = option.dataset.value
					})
				})
			}
		})
	}

	document.addEventListener('click', closeAllSelect)

	function closeAllSelect() {
		dropdownList.forEach((dropdown) => {
			dropdown.classList.remove('dropdown--active')
		})
	}
})
