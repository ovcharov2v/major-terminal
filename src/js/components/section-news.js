window.addEventListener("load", function() {
	const rows = document.querySelectorAll('.news-row');

	rows.forEach(function(row) {
		let max_height = 0;
		const cards = row.querySelectorAll('.news-card');

		cards.forEach(function(card) {
			let current_height = card.offsetHeight;
			if (current_height > max_height) {
				max_height = current_height;
			}
		});

		cards.forEach(function(card) {
			card.style.height = max_height + 'px';
		});
	});
});
