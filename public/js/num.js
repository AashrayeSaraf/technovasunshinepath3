var number = generateRandomNumber();
var guesses = 0;

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
  var guess = parseInt(document.getElementById("guess").value);
  var output = "";

  if (isNaN(guess) || guess < 1 || guess > 100) {
    output = "Please enter a valid number between 1 and 100.";
  } else {
    guesses++;
    if (guess === number) {
      output = `Congratulations! You guessed the number ${number} in ${guesses} attempts.`;
    } else if (guess > number) {
      output = "Too high. Try again.";
    } else {
      output = "Too low. Try again.";
    }
    // Clear input field after each guess
    document.getElementById("guess").value = "";
  }
  alert(output);
}

function restartGame() {
  number = generateRandomNumber();
  guesses = 0;
  document.getElementById("guess").value = "";
  document.getElementById("output").textContent =
    "I'm thinking of a number between 1 and 100. Can you guess what it is?";
}
