document.addEventListener('DOMContentLoaded', () => {
	const contactsForm = document.querySelector('.section-contacts__form')
	if(!contactsForm) return

	contactsForm.addEventListener('submit', async (e) => {
		e.preventDefault()

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
