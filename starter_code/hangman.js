var hangman;

function Hangman(words, secretWord, letters, guessedLetter, errorsLeft) {
  this.words = ['Patt'];
  this.secretWord = '';
  this.letters = letters;
  this.guessedLetter = guessedLetter;
  this.errorsLeft = errorsLeft;
}

Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random() * this.words.length)];
};

Hangman.prototype.checkIfLetter = function (e) {
  // let validation = false;
  if (e.keyCode <= 65 && e.keyCode >= 90) {
    return true;
   } else {
     return false;
   }
  // // if (event.keyCode >= 97 && event.keyCode <= 122) {
  // //   validation = true;
  // // }
  // return validation;
};

Hangman.prototype.checkClickedLetters = function (key) {

};

// Hangman.prototype.addCorrectLetter = function (i) {

// };

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {
  
};
