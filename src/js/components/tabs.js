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
	const tabs = document.querySelectorAll(".section-partner__link, .dropdown__option[data-tab]");
	const contentBlocks = document.querySelectorAll(".tabs2__content");
	tabs.forEach(tab => {
		tab.addEventListener("click", function(event) {
			event.preventDefault();
			console.log(1)
			const activeTab = this.dataset.tab;
			tabs.forEach(tab => tab.classList.remove("section-partner__link--active"));
			contentBlocks.forEach(contentBlock => contentBlock.classList.remove("active"));
			this.classList.add("section-partner__link--active");
			document.querySelector(`.tabs2__content[data-tab="${activeTab}"]`).classList.add("active");
		});
	});
});

const setTabs2Height = () => {
	let max_height = 0;
	const elements = document.querySelectorAll('.tabs2__content-height');
	if(!elements.length) return

	elements.forEach(function(element) {
		element.style.minHeight = '';
	});

	elements.forEach(function(element) {
		let style = window.getComputedStyle(element);
		let margin = parseFloat(style.marginTop) + parseFloat(style.marginBottom);
		margin=0
		let totalHeight = element.offsetHeight + margin;

		if(totalHeight > max_height) {
			max_height = totalHeight;
		}
	});

	elements.forEach(function(element) {
		element.style.minHeight = max_height + 'px';
	});
}

window.onload = function() {
	setTabs2Height()
};

window.addEventListener('resize', () => {
	setTabs2Height();
})

