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
	var threeMins = 60 * 3.7,
		display = document.querySelector('#countdown');
	timerBoot(threeMins, display);
};

// Cookie value change to 'clicked' on click event

$('#btn').click(function(e) {
	// e.preventDefault();
	createCookie('start_cta_button_1', 'clicked', 365);
});

$('#congratsBtn').click(function(e) {
	// e.preventDefault();
	createCookie('claim_cta_button_2', 'clicked', 365);
});

$('#btnRock').click(function(e) {
	// e.preventDefault();
	createCookie('rock_cta_button_3', 'clicked', 365);
});

$('#btnPaper').click(function(e) {
	// e.preventDefault();
	createCookie('paper_cta_button_4', 'clicked', 365);
});

$('#btnScissors').click(function(e) {
	// e.preventDefault();
	createCookie('scissors_cta_button_5', 'clicked', 365);
});

// Reading time cookie

var startTime = new Date().getTime();

var time = setInterval(function() {
	var endTime = new Date().getTime();

	var timestamp = endTime - startTime;
	var reading_time = new Date(timestamp).getMinutes() + 'min' + '' + new Date(timestamp).getSeconds() + 'sec';

	createCookie('time_reading', reading_time, 365);
}, 1000);

/*
	var time = new Date().getTime();
	var timestamp = (time + 3600) - time;
	console.log(new Date(timestamp).getHours() + "hrs");
	console.log(new Date(timestamp).getMinutes() + "mins");
	console.log(new Date(timestamp).getSeconds() + "secs");
*/

// Scroll cookie function

$(window).scroll(function(event) {
	var h = document.documentElement,
		b = document.body,
		st = 'scrollTop',
		sh = 'scrollHeight';

	var percent = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
	createCookie('scrolled', parseInt(percent) + 'percent', 365);
	//console.log(percent + "%");
});

jQuery;

// Create cookie with name, value and expiration date

function createCookie(name, value, expires) {
	var cookie = name + '=' + escape(value) + ';';

	if (expires) {
		if (expires instanceof Date) {
			if (isNaN(expires.getTime())) expires = new Date();
		} else expires = new Date(new Date().getTime() + parseInt(expires) * 1000 * 60 * 60 * 24);
		cookie += 'expires=' + expires.toGMTString() + ';';
	}

	document.cookie = cookie;
}
