/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as they wish. Each result gets added to their ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let score, roundScore, activePlayer;

score = [0,0];
roundScore = 0;
activePlayer = 0;

document.querySelector(`#score-${activePlayer}`).textContent = score[activePlayer];
document.querySelector(`#current-${activePlayer}`).textContent = roundScore;


// callback function b/c it's called by another function
// passed into another function as an argument
// const buttonRollHandler = () => {
//   do something
//   console.log('button clicked');
// }

// Setter method using template literal to insert activePlayer into class name
// document.querySelector(`#current-${activePlayer}`).textContent = diceRoll();

// Getter method
// Let x = document.querySelector(`#current-${activePlayer}`).textContent
// console.log (x);

// don't show the die initially
document.querySelector('.dice').style.display = 'none';

// addEventListener takes two parameters: event type and function name
// document.querySelector('.btn-roll').addEventListener('click', buttonRollHandler )

// using an ES6 anonymous function instead
document.querySelector('.btn-roll').addEventListener('click', () => {
  // console.log('button clicked!!!!');
  // 1. Roll die by generating random number 1 - 6
  let diceRoll = (Math.floor(Math.random() * 6) + 1);
  console.log(diceRoll);

  // 2. Display the result
  const diceDOM = document.querySelector('.dice');

  diceDOM.style.display = 'block';
  diceDOM.src = `img/dice-${diceRoll}.png`;

  // 3. If the number is not 1, display the score for the round
  roundScore = Number(document.querySelector(`#current-${activePlayer}`).textContent);
  if ( diceRoll !== 1 ) {
    roundScore = roundScore + diceRoll;
  } else {
    roundScore = 0;
  }
  document.querySelector(`#current-${activePlayer}`).textContent = roundScore;


});
