//GLOBAL VARIABLES (accessible by all functions)
//==================================================================================

//Array of Word Options (all lowercase)
var wordList = ["mario", "yoshi", "peach", "mushroom", "shyguy", "bowser", "luigi", "stars", "coins", "wario", "nintendo", "toadstool", "koopa"];

// Solution will be held here.
var chosenWord = "";
// This will break the solution into individual letters to be stored in array.
var lettersInChosenWord = [];
// This will be the number of blanks we show based on the solution
var blanks = 0;
// Holds a mix of blank and solved letters (ex: 'n, _ _, n, _').
var blanksandSuccesses = [];
// Holds all of the wrong guesses
var wrongGuesses = [];

// Game counters
var wins = 0;
var losses = 0;
var guessCount = 9;



// FUNCTIONS (These are bits of code that we will call upon to run when needed)
// =========================================================================================

// startGame()
// Its how we we will start and restart the game.
// (Note: It's not being run here. It's just being made for future use.)

function startGame() {
  // Reset the guesses back to 0.
  guessCount = 9;

  // Solution is chosen randomly from wordList.
  chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
  // The word is broken into individual letters.
  lettersInChosenWord = chosenWord.split("");

  // We count the number of letters in the word.
  blanks = lettersInChosenWord.length;

  // We print the solution in console (for testing).
  console.log(chosenWord);

  // CRITICAL LINE - Here we *reset* the guess and success array at each round.
  blanksAndSuccesses = [];

  // CRITICAL LINE - Here we *reset* the wrong guesses from the previous round.
  wrongGuesses = [];

  // Fill up the blanksAndSuccesses list with appropriate number of blanks.
  // This is based on number of letters in solution.
  for (var i = 0; i < blanks; i++) {
    blanksAndSuccesses.push("_");
  }

  // Print the initial blanks in console.
  console.log(blanksAndSuccesses);


  // Reprints the guessesLeft to 9
  document.getElementById("guessLeft").innerHTML = guessCount;

  // Prints the blanks at the beginning of each round in the HTML
  document.getElementById("resultsArea").innerHTML = blanksAndSuccesses.join(" ");

  // Clears the wrong guesses from the previous round
  document.getElementById("guessesMade").innerHTML = wrongGuesses.join(" ");
}
// checkLetters() function
// It's where we will do all of the comparisons for matches.
// Again, it's not being called here. It's just being made for future use.
function checkLetters(letter) {

  // This boolean will be toggled based on whether or not a user letter is found anywhere in the word.
  var letterInWord = false;

  // Check if a letter exists inside the array at all.
  for (var i = 0; i < blanks; i++) {
    if (chosenWord[i] === letter) {

      // If the letter exists then toggle this boolean to true. This will be used in the next step.
      letterInWord = true;
    }
  }

  // If the letter exists somewhere in the word, then figure out exactly where (which indices).
  if (letterInWord) {

    // Loop through the word.
    for (var j = 0; j < blanks; j++) {

      // Populate the blanksAndSuccesses with every instance of the letter.
      if (chosenWord[j] === letter) {
        // Here we set the specific space in blanks and letter equal to the letter when there is a match.
        blanksAndSuccesses[j] = letter;
      }
    }

    // Logging for testing.
    console.log(blanksAndSuccesses);
  }
  // If the letter doesn't exist at all..
  else {
    // ..then we add the letter to the list of wrong letters, and we subtract one of the guesses.
    wrongGuesses.push(letter);
    guessCount--;
  }
}

// roundComplete() function
// Here we will have all of the code that needs to be run after each guess is made
function roundComplete() {

  // First, log an initial status update in the console telling us how many wins, losses, and guesses are left.
  console.log("Wins: " + wins + " | Losses: " + losses + " | GuessCount: " + guessCount);

  // Update the HTML to reflect the new number of guesses. Also update the correct guesses.
  document.getElementById("guessLeft").innerHTML = guessCount;

  // This will print the array of guesses and blanks onto the page.
  document.getElementById("resultsArea").innerHTML = blanksAndSuccesses.join(" ");

  // This will print the wrong guesses onto the page.
  document.getElementById("guessesMade").innerHTML = wrongGuesses.join(" ");

  // If we have gotten all the letters to match the solution...
  if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
    // ..add to the win counter & give the user an alert.
    wins++;
    alert("Mama Mia! You win!");


    // Update the win counter in the HTML & restart the game.
    document.getElementById("wins").innerHTML = wins;
    startGame();
  }

  // If we've run out of guesses..
  else if (guessCount === 0) {
    // Add to the loss counter.
    losses++;
    // Give the user an alert.
    alert("Whaaaa!  You lose!");

    // Update the loss counter in the HTML.
    document.getElementById("losses").innerHTML = losses;
    // Restart the game.
    startGame();
  }
}
// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================================================

// Starts the Game by running the startGame() function
  startGame();

// Then initiate the function for capturing key clicks.
  document.onkeyup = function(event) {
// Converts all key clicks to lowercase letters.
  var letterGuessed = String.fromCharCode(event.which).toLowerCase();
// Runs the code to check for correctness.
  checkLetters(letterGuessed);
// Runs the code after each round is done.
  roundComplete();
};
