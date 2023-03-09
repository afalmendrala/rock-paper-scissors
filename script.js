function getComputerChoice() {
    const choices = Array('Rock', 'Paper', 'Scissors');
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {  
    
    let playerWin = (playerSelection, computerSelection) => {
        playerScore = playerScore + 1;
        message.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
        showRoundResults(playerScore, computerScore);
    }
    
    let playerLose = (playerSelection, computerSelection) => {
        computerScore = computerScore + 1;
        message.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
        showRoundResults(playerScore, computerScore);
    }
    
    let tie = (computerSelection) => {
        message.textContent = `Tie! Both players chose ${computerSelection}!`;
        showRoundResults(playerScore, computerScore);
    }
    
    let showScores = (playerScore, computerScore) =>
    `Player score ${playerScore}, Computer score: ${computerScore}`;
    
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

const buttons = document.querySelectorAll('.choice');
const body = document.querySelector('body');
const content = document.querySelector('.content');

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

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttonClickCount = buttonClickCount + 1;

        playRound(button.value, getComputerChoice());
        
        if(buttonClickCount == 5){ 
            changeButtonsState(buttons);
        
            showGameWinner(playerScore, computerScore);
        
            content.appendChild(playAgain);
            
        }
    });
});

playAgain.addEventListener('click', () => {
    playAgainEvent();
});