import IMask from 'imask'

document.addEventListener('DOMContentLoaded', () => {
	const contactsForm = document.querySelector('.section-contacts__form')
	if(!contactsForm) return

	const nameInput = document.querySelector('.section-contacts__form-input--name')

	const phoneInput = document.querySelector('.section-contacts__form-input--tel')
	const phoneMask = IMask(phoneInput, {
		mask: '+{7}(000)000-00-00'
	})

	const emailInput = document.querySelector('.section-contacts__form-input--email')
	const emailMask = IMask(emailInput, {
		mask: /^\S*@?\S*$/
	})

	const commentInput = document.querySelector('.section-contacts__form-textarea--comment')

	const inputsArr = [nameInput, phoneInput, emailInput, commentInput]

	inputsArr.forEach((input)=>{
		input.addEventListener('input', () => {
			input.classList.remove('form-control--error')

			let hasFormError = false
			inputsArr.forEach((input)=>{
				if(input.classList.contains('form-control--error')) {
					hasFormError = true
				}
			})

			if(!hasFormError) contactsForm.classList.remove('section-contacts__form--error')
		})
	})


	contactsForm.addEventListener('submit', async (e) => {
		e.preventDefault()

		let formError = false
		inputsArr.forEach((input)=>{
			if(!input.value.trim().length) {
				input.classList.add('form-control--error')
				formError = true
				console.log(input.value.trim())
			}
		})

		if(formError) {
			contactsForm.classList.add('section-contacts__form--error')
			return false
		}

		const response = await function() {
			// Do something
			return true
		}

		if(response) {
			contactsForm.classList.add('section-contacts__form--submitted')
		}
	})

	const resetBtn = document.querySelector('.section-contacts__form-reset')
	resetBtn.addEventListener('click', () => {
		contactsForm.classList.remove('section-contacts__form--submitted')
	})
})
