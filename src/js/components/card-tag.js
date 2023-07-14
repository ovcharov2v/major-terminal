document.addEventListener("DOMContentLoaded", function () {
	const moreTagList = document.querySelectorAll('.card__tag--more')
	if(moreTagList.length) {
		moreTagList.forEach((moreTag)=>{
			moreTag.addEventListener('click', (evt) => {
				evt.preventDefault()
				evt.stopPropagation()
				const parent = moreTag.closest('.card__tag-list')
				parent.classList.add('card__tag-list--expanded')
			})
		})
	}
});
