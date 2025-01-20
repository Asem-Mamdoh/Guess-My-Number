'use strict';

const randomNumber = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const message = document.querySelector('.message');
const again = document.querySelector('.again');
const check = document.querySelector('.check');
const body = document.querySelector('body');
const scoreElement = document.querySelector('.score');
const highscoreElement = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = (ms) => {
  message.textContent = ms;
};

check.addEventListener('click', function () {
  const guess = Number(guessInput.value);

  if (!guess) {
    displayMessage('⛔ No Number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    body.style.backgroundColor = '#60b347';
    randomNumber.style.width = '30rem';
    randomNumber.textContent = secretNumber;
    check.disabled = true;

    if (score > highscore) {
      highscore = score;
      highscoreElement.textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      scoreElement.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      scoreElement.textContent = 0;
      check.disabled = true;
    }
  }
});

again.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  scoreElement.textContent = score;
  randomNumber.textContent = '?';
  guessInput.value = '';
  body.style.backgroundColor = '#222';
  randomNumber.style.width = '15rem';
  check.disabled = false;
});