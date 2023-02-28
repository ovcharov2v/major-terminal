document.addEventListener('DOMContentLoaded', () => {
	const tabsList = document.querySelectorAll('.tabs')
	if(!tabsList.length) return

	tabsList.forEach((tabs) => {
		const navBtnList = tabs.querySelectorAll('.tabs__nav-button')
		const content = tabs.querySelectorAll('.tabs__content')
		navBtnList.forEach((navBtn) => {
			navBtn.addEventListener('click', () => {
				if(!navBtn.classList.contains('tabs__nav-button--active')) {
					const contentId = navBtn.dataset.content
					const activeContent = tabs.querySelector(`#${contentId}`)
					const activeNavBtn = tabs.querySelector('.tabs__nav-button--active')
					const currentContent = tabs.querySelector('.tabs__content--active')
					currentContent.classList.add('tabs__content--hide')
					activeContent.classList.add('tabs__content--show')
					setTimeout(() => {
						activeContent.classList.add('tabs__content--active')
						activeNavBtn.classList.remove('tabs__nav-button--active')
						navBtn.classList.add('tabs__nav-button--active')
					}, 50)

					setTimeout(() => {
						currentContent.classList.remove('tabs__content--active', 'tabs__content--hide')
						activeContent.classList.add('tabs__content--active')
						activeContent.classList.remove('tabs__content--show')
					}, 400)
				}
			})
		})
	})
})
