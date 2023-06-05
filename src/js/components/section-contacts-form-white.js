import IMask from 'imask'

document.addEventListener('DOMContentLoaded', () => {
	const contactsForm = document.querySelector('.section-contacts-white__form')
	if(!contactsForm) return

	const nameInput = document.querySelector('.section-contacts-white__form-input--name')

	const phoneInput = document.querySelector('.section-contacts-white__form-input--tel')
	const phoneMask = IMask(phoneInput, {
		mask: '(XXX) XXX-XX-XX',
		definitions: {
			X: {
				mask: '0',
				placeholderChar: '0',
			},
		},
	})

	const emailInput = document.querySelector('.section-contacts-white__form-input--email')
	const emailMask = IMask(emailInput, {
		mask: /^\S*@?\S*$/
	})

	const commentInput = document.querySelector('.section-contacts-white__form-textarea--comment')

	const inputsArr = [nameInput, phoneInput, emailInput, commentInput]

	inputsArr.forEach((input)=>{
		input.addEventListener('input', () => {
			input.classList.remove('section-contacts-white__error-field')

			let hasFormError = false
			inputsArr.forEach((input)=>{
				if(input.classList.contains('section-contacts-white__error-field')) {
					hasFormError = true
				}
			})

			if(!hasFormError) contactsForm.classList.remove('section-contacts-white__form--error')
		})
	})


	contactsForm.addEventListener('submit', async (e) => {
		e.preventDefault()

		let formError = false
		inputsArr.forEach((input)=>{
			if(!input.value.trim().length) {
				input.classList.add('section-contacts-white__error-field')
				formError = true
				console.log(input.value.trim())
			}
		})

		if(formError) {
			contactsForm.classList.add('section-contacts-white__form--error')
			return false
		}

		const response = await function() {
			// Do something
			return true
		}

		if(response) {
			contactsForm.classList.add('section-contacts-white__form--submitted')
		}
	})

	const resetBtn = document.querySelector('.section-contacts-white__form-reset')
	resetBtn.addEventListener('click', () => {
		contactsForm.classList.remove('section-contacts-white__form--submitted')
	})
})
