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
  lettersInChosenWord = chosenWord.split(" ");
  console.log(lettersInChosenWord);
}
// We count the number of letters in the word.
  startGame();

// We print the solution in console (for testing).


// CRITICAL LINE - Here we *reset* the guess and success array at each round.

// CRITICAL LINE - Here we *reset* the wrong guesses from the previous round.


// Fill up the blanksAndSuccesses list with appropriate number of blanks.
// This is based on number of letters in solution.


// Print the initial blanks in console.



// Reprints the guessesLeft to 9


// Prints the blanks at the beginning of each round in the HTML


// Clears the wrong guesses from the previous round


// checkLetters() function
// It's where we will do all of the comparisons for matches.
// Again, it's not being called here. It's just being made for future use.


// This boolean will be toggled based on whether or not a user letter is found anywhere in the word.


// Check if a letter exists inside the array at all.


// If the letter exists then toggle this boolean to true. This will be used in the next step.




// If the letter exists somewhere in the word, then figure out exactly where (which indices).


// Loop through the word.


// Populate the blanksAndSuccesses with every instance of the letter.

// Here we set the specific space in blanks and letter equal to the letter when there is a match.

// Logging for testing.

// If the letter doesn't exist at all..

// ..then we add the letter to the list of wrong letters, and we subtract one of the guesses.


// roundComplete() function
// Here we will have all of the code that needs to be run after each guess is made


// First, log an initial status update in the console telling us how many wins, losses, and guesses are left.


// Update the HTML to reflect the new number of guesses. Also update the correct guesses.

// This will print the array of guesses and blanks onto the page.

// This will print the wrong guesses onto the page.


// If we have gotten all the letters to match the solution...

// ..add to the win counter & give the user an alert.



// Update the win counter in the HTML & restart the game.


// If we've run out of guesses..

// Add to the loss counter.

// Give the user an alert.


// Update the loss counter in the HTML.

// Restart the game.


// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================================================

// Starts the Game by running the startGame() function


// Then initiate the function for capturing key clicks.

// Converts all key clicks to lowercase letters.

// Runs the code to check for correctness.

// Runs the code after each round is done.
