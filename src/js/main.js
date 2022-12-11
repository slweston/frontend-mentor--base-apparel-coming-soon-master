(() => {
	const form = document.querySelector('form');
	const emailInput = form.querySelector('.email-input');
	const validation = form.querySelector('.email-input-group-with-validation');


	form.addEventListener('submit', (e) => {
		e.preventDefault();

		if (!emailInput.validity.valid) {
			validation.classList.add('error');
		}
	});

	emailInput.addEventListener('input', (e) => {
		validation.classList.remove('error');
	});

	emailInput.addEventListener('focus', (e) => {
		validation.classList.remove('error');
	});
})();