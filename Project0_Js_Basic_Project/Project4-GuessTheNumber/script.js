const randomNum = Math.floor(Math.random() * 100 + 1);
console.log(randomNum);

const formTag = document.querySelector('form');
let guessCount = 10;  // keep outside so it persists across submissions
let previousGuessesArray = [];

formTag.addEventListener('submit', function (e) {
  e.preventDefault();

  const result = document.querySelector('#result');
  const hint = document.querySelector('#hint');
  const previousGuess = document.querySelector('#previous');
  const remain = document.querySelector('#remain');
  const input = parseInt(document.querySelector('#input-guess').value);

  if (input < 1 || input > 100 || isNaN(input)) {
    result.textContent = '⚠️ Please enter a number between 1 and 100!';
    return;
  }

  previousGuessesArray.push(input);
  previousGuess.textContent = previousGuessesArray.join(', ');

  if (input === randomNum) {
    result.textContent = '🎉 Hurray! You guessed it right!';
    hint.textContent = '';
    formTag.querySelector('button').disabled = true; // disable after win Disabled the submit button after win
    return;
  } else if (input < randomNum) {
    hint.textContent = '⬆️ Answer is more than your guess';
    result.textContent = 'Wrong! Try again.';
  } else {
    hint.textContent = '⬇️ Answer is less than your guess';
    result.textContent = 'Wrong! Try again.';
  }

  guessCount--;
  remain.textContent = guessCount;

  if (guessCount === 0) {
    result.textContent = `❌ Game Over! The number was ${randomNum}`;
    formTag.querySelector('button').disabled = true; // stop game / Disabled the submit button after loss [Chance is over]
  }
});
