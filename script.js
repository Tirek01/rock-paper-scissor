'use strict'
console.log('Hello World');

let computerSelection;
let playerSelection;
let result;
let playerScore = 0;
let computerScore = 0;
let gameRound = 0;


function computerPlay() {
    const play = ['Rock', 'Paper', 'Scissor'];
    computerSelection = play[Math.floor(Math.random() * play.length)];
    return computerSelection;
}

function player() {
    let play = prompt('Select "Rock", "Paper" or "Scissor"');
    playerSelection = play.charAt(0).toUpperCase() + play.slice(1).toLowerCase();
    return playerSelection;
}

function playRound() {
    player();
    computerPlay();
    if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        playerScore++;
        return result = 'You Win! Paper beats Rock';
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        computerScore++;
        return result = 'You Lose! Rock doesn\'t beat Paper';
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissor') {
        playerScore++;
        return result = 'You Win! Rock beats Scissor';
    } else if (playerSelection == 'Scissor' && computerSelection == 'Rock') {
        computerScore++;
        return result = 'You Lose! Scissor doesn\'t beat Rock';
    } else if (playerSelection == 'Scissor' && computerSelection == 'Paper') {
        playerScore++;
        return result = 'You Win! Scissor beats Paper';
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissor') {
        computerScore++;
        return result = 'You Lose! Paper doesn\'t beat Scissor';
    } else if (playerSelection == computerSelection) {
        playerScore++;
        computerScore++;
        return result = 'Draw!';
    }
}

function score() {
    if (playerScore > computerScore) {
        alert(`You Won! ${playerScore} vs ${computerScore}`);
    } else if (playerScore < computerScore) {
        alert(`You Lost! ${playerScore} vs ${computerScore}`);
    } else {
        alert(`Draw ${playerScore} vs ${computerScore}`);
    }
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    gameRound = 0;
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
        ++gameRound;
        console.log(result);
    } if (gameRound == 5) {
        score();
        reset();
    }
}