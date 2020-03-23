// Hide welcome note on click
const goButton = document.getElementById('btn');
const welcomeContainer = document.getElementById('neon_wrapper');

goButton.addEventListener('click', () => {
	welcomeContainer.classList.add('toggle-hide');
});

// Timer to boot the 3 minute countdown

function timerBoot(duration, display) {
	var countdown = duration,
		mins,
		secs;
	setInterval(function() {
		mins = parseInt(countdown / 60, 10);
		secs = parseInt(countdown % 60, 10);
		mins = mins < 10 ? '0' + mins : mins;
		secs = secs < 10 ? '0' + secs : secs;
		display.textContent = mins + ':' + secs;
		if (--countdown < 0) {
			countdown = duration;
		}
	}, 1000);
}
window.onload = function() {
	var threeMins = 60 * 3,
		display = document.querySelector('#countdown');
	timerBoot(threeMins, display);
};

// Show congrats container

const congratsCon = document.getElementById('congratsCon');
(function() {
	congratsCon.style.display = 'block';
});
