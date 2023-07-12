document.addEventListener('DOMContentLoaded', () => {
	const dropdownList = document.querySelectorAll('.dropdown')
	if(dropdownList.length) {
		dropdownList.forEach((dropdown) => {
			dropdown.addEventListener('click', (evt) => {
				evt.stopPropagation()
				dropdown.classList.toggle('dropdown--active')
				dropdownList.forEach((el) => {
					if (el !== dropdown) {
						el.classList.remove('dropdown--active')
					}
				})
			})
			// Multi select
			if(dropdown.classList.contains('dropdown--multi-select')) {
				const counter = dropdown.querySelector('.dropdown__value-counter')
				const input = dropdown.querySelector('.dropdown__multi-input')
				// Test event listener
				input.addEventListener('change', () => {
					console.log('changed')
				})

				dropdown.addEventListener('click', (evt) => {
					evt.stopPropagation()
					const valueList = []
						const checkedOptions = dropdown.querySelectorAll(':checked');
						checkedOptions.forEach((opt)=>{
							valueList.push(opt.value)
						})
						const valueString = valueList.join(', ')
						if(valueString !== input.value) {
							input.value = valueString
							input.dispatchEvent(new Event("change"))
						}
						counter.innerHTML = checkedOptions.length.toString()
				})
			}
			// Single select
			else {
				const input = dropdown.querySelector('.dropdown__value')
				// Test event listener
				input.addEventListener('change', () => {
					console.log('changed')
				})

				const optionsList = dropdown.querySelectorAll('.dropdown__option')
				optionsList.forEach((option) => {
					option.addEventListener('click', (e) => {
						e.preventDefault();
						if(dropdown.classList.contains('dropdown--navigate')) {
							window.location.href=option.dataset.value
						}
						else {
							input.value = option.dataset.value
							input.dispatchEvent(new Event("change"))
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
