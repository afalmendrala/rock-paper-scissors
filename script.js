function getComputerChoice() {
    const choices = Array('Rock', 'Paper', 'Scissors');
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {  
    let playerWin = (playerSelection, computerSelection) => {
        playerScore = playerScore + 1;
        message.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
        scores.textContent = showScores(playerScore, computerScore);
        body.appendChild(message);
        body.appendChild(scores);
    }
    
    let playerLose = (playerSelection, computerSelection) => {
        computerScore = computerScore + 1;
        message.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
        scores.textContent = showScores(playerScore, computerScore);
        body.appendChild(message);
        body.appendChild(scores);
    }
    
    let tie = (computerSelection) => {
        message.textContent = `Tie! Both players chose ${computerSelection}!`;
        scores.textContent = showScores(playerScore, computerScore);
        body.appendChild(message);
        body.appendChild(scores);
    }


    let showScores = (playerScore, computerScore) =>
        `Player score ${playerScore}, Computer score: ${computerScore}`;
    
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
        return 'Player wins!';
    }
    else if(playerScore < computerScore) {
        return 'Computer wins!';
    }
    else {
        return 'Tie!';
    }
}

function changeButtonsState(buttons) {
    for(let i = 0; i < buttons.length; i++) {
        if(buttons[i].disabled == false){
            buttons[i].setAttribute('disabled', true);
        }
        else {
            buttons[i].removeAttribute('disabled');
        }
    } 
}

const buttons = document.querySelectorAll('.choice');
const body = document.querySelector('body');

let playerScore = 0
let computerScore = 0;
let buttonClickCount = 0;

let message = document.createElement('p');
let scores = document.createElement('p');
let winner = document.createElement('p');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttonClickCount = buttonClickCount + 1;

        playRound(button.value, getComputerChoice());
        
        if(buttonClickCount == 5){ 
            winner.textContent = showGameWinner(playerScore, computerScore);
            body.appendChild(winner);

            changeButtonsState(buttons);
            
            const playAgain = document.createElement('button');
            playAgain.textContent = 'Play again?'
            body.appendChild(playAgain);
            
            playAgain.addEventListener('click', () => {
                changeButtonsState(buttons);
                playerScore = 0;
                computerScore = 0;
                buttonClickCount = 0;
                body.removeChild(message);
                body.removeChild(scores);
                body.removeChild(winner);
                body.removeChild(playAgain);
            });
        }
    });
});
