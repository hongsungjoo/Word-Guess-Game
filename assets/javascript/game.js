var letterAll = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterChoices = ["k", "o", "b", "e", "r", "y", "a", "n", "t"];

var winNumber = 0;
var currentWord = "";
var guessRemaining = 25;
var usedLetter = "";
var letterIndex = 0;

var winCounterSection = document.getElementById("win-number-here");
var wordSection = document.getElementById("guessed-letters-here");
var firstLetter = document.getElementById("firstL");
var secondLetter = document.getElementById("secondL");
var thirdLetter = document.getElementById("thirdL");
var fourthLetter = document.getElementById("fourthL");
var fifthLetter = document.getElementById("fifthL");
var sixthLetter = document.getElementById("sixthL");
var seventhLetter = document.getElementById("seventhL");
var eigthLetter = document.getElementById("eigthL");
var ninthLetter = document.getElementById("ninthL");
var tenthLetter = document.getElementById("tenthL");
var remainingCounterSection = document.getElementById("remaining-numbers-here");
var usedLetterSection = document.getElementById("used-letters-here");
var gameOverMessage = document.getElementById("game-message");
var alertZone1 = document.getElementById("alert-zone1");
var alertZone2 = document.getElementById("alert-zone2");

document.onkeyup = function(event) {
var userGuess = event.key.toLowerCase();

    if (userGuess === "k") { firstLetter.textContent = "K" };
    if (userGuess === "o") { secondLetter.textContent = "O" };
    if (userGuess === "b") { thirdLetter.textContent = "B"; fifthLetter.textContent = "B" };
    if (userGuess === "e") { fourthLetter.textContent = "E" };
    if (userGuess === "r") { sixthLetter.textContent = "R" };
    if (userGuess === "y") { seventhLetter.textContent = "Y" };
    if (userGuess === "a") { eigthLetter.textContent = "A" };
    if (userGuess === "n") { ninthLetter.textContent = "N" };
    if (userGuess === "t") { tenthLetter.textContent = "T" };

    // display typed keys
    for (var i = 0; i < letterAll.length; i++) {
        if (userGuess === letterAll[i]) {
            // Update used letters
            var usedLetterP = document.createElement("div");
            usedLetterP.textContent = userGuess;
            usedLetterSection.appendChild(usedLetterP);
            }
        }
    // kick off functions to alert
    updateRemainingGuesses()
    updateLetterIndex()
    youWin()
    gameOver()

// alert when letterIndex reaches 9
function youWin () {
  if (letterIndex === 9) {
    winCounterSection.innerHTML = winNumber++;
    alertZone2.innerHTML = "YOU WIN!";
    return;
  }
}
// update letterIndex when a letter from letterChoices are hit
function updateLetterIndex() { 
  for (var i = 0; i < letterChoices.length; i++) {
      if (userGuess === letterChoices[i]) { 
        letterIndex++; }  
      }
  }
// update remaining guesses
function updateRemainingGuesses() { 
remainingCounterSection.innerHTML = guessRemaining--;
}
// Function to end game
function gameOver() {
  if (guessRemaining === 0) {
    alertZone1.innerHTML = "GAME OVER!";
        }
      }
}