document.addEventListener('DOMContentLoaded', () => {
	const tabsList = document.querySelectorAll('.tabs')
	if (!tabsList.length) return

	tabsList.forEach((tabs) => {
		const navBtnList = tabs.querySelectorAll('.tabs__nav-button')
		const content = tabs.querySelectorAll('.tabs__content')
		navBtnList.forEach((navBtn) => {
			navBtn.addEventListener('click', () => {
				if (!navBtn.classList.contains('tabs__nav-button--active')) {
					const contentId = navBtn.dataset.content
					const activeContent = tabs.querySelector(`#${contentId}`)
					const activeAllBtn = tabs.querySelectorAll(`[data-btn-content="${contentId}"]`)
					const currentActiveAllBtn = tabs.querySelectorAll('.tabs__all-btn--active')
					const activeNavBtn = tabs.querySelector('.tabs__nav-button--active')
					const currentContent = tabs.querySelector('.tabs__content--active')
					currentContent.classList.add('tabs__content--hide')
					activeContent.classList.add('tabs__content--show')

					if (activeAllBtn.length) {
						currentActiveAllBtn.forEach((current) => {
							current.classList.remove('tabs__all-btn--active')
							current.classList.add('tabs__all-btn--hide')
						})
						activeAllBtn.forEach((active) => {
							active.classList.add('tabs__all-btn--show')
						})
					}

					setTimeout(() => {
						currentContent.classList.remove('tabs__content--active', 'tabs__content--hide')
						activeContent.classList.remove('tabs__content--show')
						activeContent.classList.add('tabs__content--active')
						activeNavBtn.classList.remove('tabs__nav-button--active')
						navBtn.classList.add('tabs__nav-button--active')

						if (activeAllBtn.length) {
							currentActiveAllBtn.forEach((current) => {
								current.classList.remove('tabs__all-btn--hide')
							})
							activeAllBtn.forEach((active) => {
								active.classList.remove('tabs__all-btn--show')
								active.classList.add('tabs__all-btn--active')
							})
						}
					}, 300)
				}
			})
		})
	})
})

document.addEventListener("DOMContentLoaded", function() {
	const tabs = document.querySelectorAll(".section-partner__link");
	const contentBlocks = document.querySelectorAll(".section-partner__list-arrow-block");
	tabs.forEach(tab => {
		tab.addEventListener("click", function(event) {
			event.preventDefault();
			const activeTab = this.dataset.tab;
			tabs.forEach(tab => tab.classList.remove("section-partner__link--active"));
			contentBlocks.forEach(contentBlock => contentBlock.classList.remove("active"));
			this.classList.add("section-partner__link--active");
			document.querySelector(`.section-partner__list-arrow-block[data-tab="${activeTab}"]`).classList.add("active");
		});
	});
});

document.addEventListener("DOMContentLoaded", function() {
	let max_height = 0;
	const elements = document.querySelectorAll('.section-partner__col--content .section-partner__list-arrow-block');

	elements.forEach(function(element) {
		let current_height = element.offsetHeight;
		if(current_height > max_height) {
			max_height = current_height;
		}
	});

	elements.forEach(function(element) {
		element.style.height = max_height + 'px';
	});
});
