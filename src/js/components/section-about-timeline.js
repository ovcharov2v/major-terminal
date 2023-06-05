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
	}

	const mouseUpHandler = function () {
		document.removeEventListener('mousemove', mouseMoveHandler)
		document.removeEventListener('mouseup', mouseUpHandler)
	}

	const wheelHandler = function (e) {
		const rect = timeline.getBoundingClientRect();
		const speedCoefficient = 0.5; // Уменьшает скорость прокрутки в 2 раза

		// Если верх элемента находится в начале окна
		if (rect.top <= 0) {
			// Проверка, достигли ли мы конца или начала прокрутки
			if ((e.deltaY < 0 && timeline.scrollLeft > 0) ||
				(e.deltaY > 0 && timeline.scrollLeft < timeline.scrollWidth - timeline.clientWidth)) {
				e.preventDefault();
				timeline.scrollLeft += e.deltaY * speedCoefficient;
			}
		}
	}



	document.addEventListener('mousedown', mouseDownHandler)
	timeline.addEventListener('wheel', wheelHandler)
})
