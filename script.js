
//Jaylon Kirby R. Froa
//BSIT-2A 
const secretWords = ["apple", "banana", "grape", "mango", "peach"];
const secretWord = secretWords[Math.floor(Math.random() * secretWords.length)];

console.log("Secret word (for testing):", secretWord);


let attemptsLeft = 5;
const feedbackMessage = document.getElementById("feedbackMessage");
const attemptsDisplay = document.getElementById("attemptsLeft");
const guessInput = document.getElementById("guessInput");
const submitButton = document.getElementById("submitButton");

function handleGuess() {
  const userGuess = guessInput.value.trim().toLowerCase();
  guessInput.value = ""; // Clear the input field

  if (userGuess === "") {
    feedbackMessage.textContent = "Please enter a valid guess.";
    return;
  }

  if (userGuess === secretWord) {
    feedbackMessage.textContent = "🎉 Congratulations! You guessed the secret word!";
    feedbackMessage.style.color = "#32CD32";
    submitButton.disabled = true;
    return;
  }

  attemptsLeft--;

  if (attemptsLeft > 0) {
    feedbackMessage.textContent = `❌ Incorrect guess. You have ${attemptsLeft} attempt(s) left.`;
    feedbackMessage.style.color = "#FF6347";
  } else {
    feedbackMessage.textContent = `💔 Game over! The secret word was '${secretWord}'.`;
    feedbackMessage.style.color = "#FF6347";
    submitButton.disabled = true;
  }

  attemptsDisplay.textContent = `Attempts left: ${attemptsLeft}`;
}


submitButton.addEventListener("click", handleGuess);