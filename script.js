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

// function player() {
//     let play = prompt('Select "Rock", "Paper" or "Scissor"');
//     playerSelection = play.charAt(0).toUpperCase() + play.slice(1).toLowerCase();
//     return playerSelection;
// }

function playRound() {
    computerPlay();
    if (playerSelection == 'Paper' && computerSelection == 'Rock' ||
    playerSelection == 'Rock' && computerSelection == 'Scissor' ||
    playerSelection == 'Scissor' && computerSelection == 'Paper') {
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper' ||
    playerSelection == 'Scissor' && computerSelection == 'Rock' ||
    playerSelection == 'Paper' && computerSelection == 'Scissor') {
        computerScore++;
        result = `You Lose! ${playerSelection} doesn\'t beat ${computerSelection}`;
    } else {
        result = 'Draw!';
    }
    scoreboard();
}

const container = document.querySelector('.container');

const currentScore = document.createElement('p');
container.insertBefore(currentScore, container.firstChild)

const roundWinner = document.createElement('div');
container.insertBefore(roundWinner, currentScore.nextSibling);

const finalWinner = document.createElement('p');
container.insertBefore(finalWinner, container.firstChild);

function scoreboard() {
    roundWinner.textContent = result;
    currentScore.textContent = `Player Score ${playerScore} vs ${computerScore} Computer Score`;
    gameRound++;
    if (gameRound == 5) {
        roundWinner.textContent = '';
        currentScore.textContent = '';

        if (playerScore > computerScore) {
            finalWinner.textContent = `You Won! Player Score ${playerScore} vs ${computerScore} Computer Score`;
        } else if (playerScore < computerScore) {
            finalWinner.textContent = `You Lost! Player Score ${playerScore} vs ${computerScore} Computer Score`;
        } else {
            finalWinner.textContent = `Draw ${playerScore} vs ${computerScore}`;
        }
        // disable buttons to play
        const disable = document.getElementsByClassName('btn1');
        for (let i = 0; i < disable.length; i++) {
        disable[i].setAttribute('disabled', true);
        }
    }
}

const playerPaper = document.getElementById('paper');
playerPaper.addEventListener('click', function() {
    playerSelection = 'Paper';
    playRound();
});

const playerScissor = document.getElementById('scissor');
playerScissor.addEventListener('click', function() {
    playerSelection = 'Scissor';
    playRound();
});

const playerRock = document.getElementById('rock');
playerRock.addEventListener('click', function() {
    playerSelection = 'Rock';
    playRound();
})

const reset = document.getElementById('reset');
reset.addEventListener('click', function() {
    playerScore = 0;
    computerScore = 0;
    gameRound = 0;
    roundWinner.textContent = '';
    currentScore.textContent = '';
    finalWinner.textContent = '';

    // enable buttons to play
    const enable = document.getElementsByClassName('btn1');
    for (let i = 0; i < enable.length; i++) {
    enable[i].removeAttribute('disabled');
    }
});

