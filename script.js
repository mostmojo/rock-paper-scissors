const goButton = document.getElementById('btn');
const welcomeContainer = document.getElementById('neon_wrapper');

goButton.addEventListener('click', () => {
	welcomeContainer.classList.add('toggle-hide');
});
