function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {  
    
    let playerWin = (playerSelection, computerSelection) => {
        message.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
        showRoundResults(playerScore, computerScore);
    }
    
    let playerLose = (playerSelection, computerSelection) => {
        message.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
        showRoundResults(playerScore, computerScore);
    }
    
    let tie = (computerSelection) => {
        message.textContent = `Tie! Both players chose ${computerSelection}!`;
        showRoundResults(playerScore, computerScore);
    }
        
    let showRoundResults = (playerScore, computerScore) => {
        scores.textContent = showScores(playerScore, computerScore);
        content.appendChild(message);
        content.appendChild(scores);

    }

    switch(playerSelection.toLowerCase()) {
        case 'rock':
            if(computerSelection == 'Rock') {
                tie(computerSelection);
                break;
            }
            else if(computerSelection == 'Paper') {
                playerLose(playerSelection, computerSelection);
                break;
            }
            else {
                playerWin(playerSelection, computerSelection);
                break;
            }
        
        case 'paper':
            if(computerSelection == 'Rock') {
                playerWin(playerSelection, computerSelection);
                break;
            }
            else if(computerSelection == 'Paper') {
                tie(computerSelection);
                break;
            }
            else {
                playerLose(playerSelection, computerSelection);
                break;
            }
        
        case 'scissors':
            if(computerSelection == 'Rock') {
                playerLose(playerSelection, computerSelection);
                break;
            }
            else if(computerSelection == 'Paper') {
                playerWin(playerSelection, computerSelection);
                break;
            }
            else {
                tie(computerSelection);
                break;
            }            
    }
}

function showGameWinner(playerScore, computerScore) {
    if(playerScore > computerScore) {
        winner.textContent = 'Player wins!';
        content.appendChild(winner);
    }
    else if(playerScore < computerScore) {
        winner.textContent = 'Computer wins!';
        content.appendChild(winner);
    }
    else {
        winner.textContent = 'Tie!';
        content.appendChild(winner);
    }
}

function changeButtonsState(buttons) {
    for(let i = 0; i < buttons.length; i++) {
        if(buttons[i].disabled == false){
            buttons[i].setAttribute('disabled', true);
            buttons[i].className = "disabled";
        }
        else {
            buttons[i].removeAttribute('disabled');
            buttons[i].classList.remove('disabled');
            buttons[i].classList.add('choice');
        }
    } 
}

function playAgainEvent() {
    changeButtonsState(buttons);
    playerScore = 0;
    computerScore = 0;
    buttonClickCount = 0;
    content.removeChild(message);
    content.removeChild(scores);
    content.removeChild(winner);
    content.removeChild(playAgain);
}

function selection(button) {
    switch(button) {
        case 'Prev':
            switch (choice.textContent) {
                case choices[0]:
                    choice.textContent = choices[2];
                    document.getElementById('player-choice').src = `./images/${choice.textContent}.png`;
                    break;
                case choices[1]:
                    choice.textContent = choices[0];
                    document.getElementById('player-choice').src = `./images/${choice.textContent}.png`;
                    break;
                case choices[2]:
                    choice.textContent = choices[1];
                    document.getElementById('player-choice').src = `./images/${choice.textContent}.png`;
                    break;
            }
            break;
        case 'Next':
            switch (choice.textContent) {
                case choices[0]:
                    choice.textContent = choices[1];
                    document.getElementById('player-choice').src = `./images/${choice.textContent}.png`;
                    break;
                case choices[1]:
                    choice.textContent = choices[2];
                    document.getElementById('player-choice').src = `./images/${choice.textContent}.png`;
                    break;
                case choices[2]:
                    choice.textContent = choices[0];
                    document.getElementById('player-choice').src = `./images/${choice.textContent}.png`;
                    break;
            }
            break;
    }
}

const body = document.querySelector('body');
const content = document.querySelector('.content');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const choice = document.querySelector('.choice');

const choices = Array('Rock', 'Paper', 'Scissors');
choice.textContent = choices[0];
document.getElementById('player-choice').src = `./images/${choice.textContent}.png`;

let playerScore = 0
let computerScore = 0;
let buttonClickCount = 0;

let message = document.createElement('p');
let scores = document.createElement('p');
let winner = document.createElement('p');

message.classList.add('results');
scores.classList.add('results');
winner.classList.add('results');

const playAgain = document.createElement('button');
playAgain.textContent = 'Play again?'

prev.addEventListener('click', () => selection(prev.textContent));
next.addEventListener('click', () => selection(next.textContent));
playAgain.addEventListener('click', () => playAgainEvent());