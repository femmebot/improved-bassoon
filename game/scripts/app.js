/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as they wish. Each result gets added to their ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let score, roundScore, activePlayer;

// zero out all the things!
const newGame = () => {

  score = [0,0];
  roundScore = 0;
  activePlayer = 0;

  for (let i in score) {
  // for (i = 0; i < score.length; i++) {
    // console.log(value);
    document.getElementById(`score-${i}`).textContent = score[i];
    document.getElementById(`current-${i}`).textContent = roundScore;
    document.querySelector(`.player-${i}-panel`).classList.remove('active');
    document.querySelector(`.player-${activePlayer}-panel`).classList.add('active');
  }
};

// don't show the die initially
const hideDice = () => document.querySelector('.dice').style.display = 'none';

const switchTurn = () => {
  hideDice();
  roundScore = 0;
  document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
  document.getElementById(`current-${activePlayer}`).textContent = roundScore;
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  document.querySelector(`.player-${activePlayer}-panel`).classList.add('active');
};

newGame();
hideDice();

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

// addEventListener takes two parameters: event type and function name
// document.querySelector('.btn-roll').addEventListener('click', buttonRollHandler )

// using an ES6 anonymous function instead
document.querySelector('.btn-roll').addEventListener('click', () => {
  // 1. Roll die by generating random number 1 - 6
  let diceRoll = (Math.floor(Math.random() * 6) + 1);

  // 2. Display the die image
  const diceDOM = document.querySelector('.dice');

  diceDOM.style.display = 'block';
  diceDOM.src = `img/dice-${diceRoll}.png`;

  // 3. If the number is not 1, display the score for the round
  roundScore = Number(document.getElementById(`current-${activePlayer}`).textContent);
  if ( diceRoll !== 1 ) {
    roundScore += diceRoll;
    document.getElementById(`current-${activePlayer}`).textContent = roundScore;
  } else {
    switchTurn();
  }
});

document.querySelector('.btn-hold').addEventListener('click', () => {
  console.log('button hold clicked!!!');
  // 1. add roundScore to #score-1
  score[activePlayer] += roundScore;
  // 2. Update UI
  console.log(`Score: ${ score[activePlayer] } Type: ${ typeof(score[activePlayer]) }` );
  document.getElementById(`score-${activePlayer}`).textContent = score[activePlayer];
  // 3. Check if player won the Game
  if ( score[activePlayer] >= 100 ) {
    alert ('You won!!');
  } else {
    switchTurn();
  };

});

document.querySelector('.btn-new').addEventListener('click', () => {
  newGame();
});
