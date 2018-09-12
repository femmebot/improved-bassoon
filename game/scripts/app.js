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


let diceRoll = () => {
    return (Math.floor(Math.random() * 6) + 1);
};

console.log (diceRoll());

document.querySelector("#current-0").textContent = diceRoll();
