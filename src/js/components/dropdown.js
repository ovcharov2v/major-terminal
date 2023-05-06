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

						if(dropdown.classList.contains('dropdown--navigate')) {
							window.location.href=option.dataset.value
						}
						else {
							input.value = option.dataset.value
							dropdown.querySelector('.dropdown__option--selected').classList.remove('dropdown__option--selected')
							option.classList.add('dropdown__option--selected')

							if(dropdown.classList.contains('dropdown--with-flag')) {
								const currentFlag = dropdown.querySelector('.dropdown__value-box .dropdown__flag')
								const nextFlag = option.querySelector('.dropdown__flag')
								currentFlag.src = nextFlag.src
							}
						}
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
