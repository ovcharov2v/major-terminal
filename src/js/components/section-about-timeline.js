document.addEventListener('DOMContentLoaded', () => {
	const timeline = document.querySelector('.section-about-timeline')
	if(!timeline) return

	let pos = { top: 0, left: 0, x: 0, y: 0 }

	const mouseMoveHandler = function (e) {
		const dx = e.clientX - pos.x
		timeline.scrollLeft = pos.left - dx
	}

	const mouseDownHandler = function (e) {
		pos = {
			left: timeline.scrollLeft,
			x: e.clientX,
		}

		document.addEventListener('mousemove', mouseMoveHandler)
		document.addEventListener('mouseup', mouseUpHandler)
	};

	const mouseUpHandler = function () {
		document.removeEventListener('mousemove', mouseMoveHandler)
		document.removeEventListener('mouseup', mouseUpHandler)
	}

	document.addEventListener('mousedown', mouseDownHandler)
})
