document.addEventListener('DOMContentLoaded', function () {

	let nav = document.getElementById('nav')

	if (nav) {
		let divs = nav.querySelectorAll('i > div')

		for (const val of divs) {
			if (!val.dataset.counter) {
				val.classList.add('is-hidden')
			}
		}
	}
});
