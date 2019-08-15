var hangman;

function Hangman() {
  this.words = ['Patt', 'Ivan'];
  this.secretWord = '';
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random() * this.words.length)];
};

Hangman.prototype.checkIfLetter = function (e) {
  let letter = false;
  if (e.keyCode >= 65 && e.keyCode <= 90) letter = true;
  return letter;
};

Hangman.prototype.checkClickedLetters = function (key) {
  let notExists = false;
  if (!this.letters.includes(key)){
    this.letters.push(key);
    notExists = true;
  }
  return notExists;
};

// Hangman.prototype.addCorrectLetter = function (i) {

// };

// Hangman.prototype.addWrongLetter = function (letter) {

// };

Hangman.prototype.checkGameOver = function () {
  return (this.errorsLeft == 0) ? true : false;
};

Hangman.prototype.checkWinner = function () {
  return (this.guessedLetter == this.secretWord) ? true : false;
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
