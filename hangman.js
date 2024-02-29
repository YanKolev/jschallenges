/*
Instructions on how to create the game: 

1.Pick a random word.
2. Take the player’s guess.
3. Quit the game if the player wants to.
4. Check that the player’s guess is a valid letter.
5. Keep track of letters the player has guessed.
6. Show the player their progress.
7.Finish when the player has guessed the word.

//Pseudocode: 

Pick a random word
While the word has not been guessed {
Show the player their current progress
Get a guess from the player
If the player wants to quit the game {
Quit the game
}
Else If the guess is not a single letter {
Tell the player to pick a single letter
}
Else {
If the guess is in the word {
Update the player's progress with the guess
}
}
}
Congratulate the player on guessing the word

*/

// Create an array of words
const words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
    ];
    // Pick a random word
const word = words[Math.floor(Math.random() * words.length)];
    // Set up the answer array
let answerArray = [];
for (let i = 0; i < word.length; i++) {
answerArray[i] = "_";
}
let remainingLetters = word.length;
// The game loop
while (remainingLetters > 0) {
// Show the player their progress
alert(answerArray.join(" "));
// Get a guess from the player
let guess = prompt("Guess a letter, or click Cancel to stop playing.");
if (guess === null) {
// Exit the game loop
break;
} else if (guess.length !== 1) {
alert("Please enter a single letter.");
} else {
// Update the game state with the guess
for (let j = 0; j < word.length; j++) {
if (word[j] === guess) {
answerArray[j] = guess;
remainingLetters--;
}
}
}
// The end of the game loop
}
// Show the answer and congratulate the player
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);