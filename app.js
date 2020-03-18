const game = () => {
	let pScore = 0;
	let cScore = 0;

	const startGame = () => {
		const playBtn = document.querySelector('.intro button');
		const introScreen = document.querySelector('.intro');
		const match = document.querySelector('.match');

		playBtn.addEventListener('click', () => {
			introScreen.classList.add('fadeOut');
			match.classList.add('fadeIn');
		});
	};

	// Play match!
	const playMatch = () => {
		const options = document.querySelectorAll('.options button');
		const playerHand = document.querySelector('.player-hand');
		const computerHand = document.querySelector('.computer-hand');
		const hands = document.querySelectorAll('.hands img');

		hands.forEach(hand => {
			hand.addEventListener('animationend', function() {
				this.style.animation = '';
			});
		});

		// Computer's options - randomly generated
		const computerOptions = ['rock', 'paper', 'scissors'];

		options.forEach(option => {
			option.addEventListener('click', function() {
				// Computer's choice
				const computerNumber = Math.floor(Math.random() * 3);
				const computerChoice = computerOptions[computerNumber];

				setTimeout(() => {
					// Here's where we call compareHands
					compareHands(this.textContent, computerChoice);

					// Update images
					playerHand.src = `./assets/${this.textContent}.png`;
					computerHand.src = `./assets/${computerChoice}.png`;
				}, 2000);

				// Animation
				playerHand.style.animation = 'shakePlayer 2s ease';
				computerHand.style.animation = 'shakeComputer 2s ease';
			});
		});
	};

	const updateScore = () => {
		const playerScore = document.querySelector('.player-score p');
		const computerScore = document.querySelector('.computer-score p');
		playerScore.textContent = pScore;
		computerScore.textContent = cScore;
	};

	const compareHands = (playerChoice, computerChoice) => {
		//Update the text
		const winner = document.querySelector('.winner');
		// Check for a draw
		if (playerChoice === computerChoice) {
			winner.textContent = "It's a draw!";
			return;
		}
		// Check for rock
		if (playerChoice === 'rock') {
			if (computerChoice === 'scissors') {
				winner.textContent = 'You win! 😎';
				pScore++;
				updateScore();
				return;
			} else {
				winner.textContent = 'Matrix82 wins! 🤖';
				cScore++;
				updateScore();
				return;
			}
		}
		// Check for paper
		if (playerChoice === 'paper') {
			if (computerChoice === 'scissors') {
				winner.textContent = 'Matrix82 wins! 🤖';
				cScore++;
				updateScore();
				return;
			} else {
				winner.textContent = 'You win! 😎';
				pScore++;
				updateScore();
				return;
			}
		}
		// Check for scissors
		if (playerChoice === 'scissors') {
			if (computerChoice === 'rock') {
				winner.textContent = 'Matrix82 wins! 🤖';
				cScore++;
				updateScore();
				return;
			} else {
				winner.textContent = 'You win! 😎';
				pScore++;
				updateScore();
				return;
			}
		}
	};

	// Call the inner function to invoke it within the game function
	startGame();
	playMatch();
};

// Call the game function to start the game
game();
