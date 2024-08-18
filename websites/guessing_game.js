let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let guessNumber = Math.ceil(Math.random() * 100);

function checkGuess() {
    let result = parseInt(userInput.value);
    if (guessNumber > result) {
        gameResult.textContent = "Too Low! Try Again";
        gameResult.style.backgroundColor = "blue";
    } else if (guessNumber < result) {
        gameResult.textContent = "Too High! Try Again";
        gameResult.style.backgroundColor = "blue";
    } else if (guessNumber === result) {
        gameResult.textContent = "Congratualations";
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = "Please enter a valid number!";
        gameResult.style.backgroundColor = "red";
    }
}