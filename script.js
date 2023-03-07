function getComputerChoice() {
    const choices = Array('Rock', 'Paper', 'Scissors');
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {  
    let playerWin = (playerSelection, computerSelection) => 
        `You win! ${playerSelection} beats ${computerSelection}!`;
    
    let playerLose = (playerSelection, computerSelection) =>
        `You lose! ${computerSelection} beats ${playerSelection}!`;
    
    let tie = (computerSelection) =>
        `Tie! Both players chose ${computerSelection}!`;

    let showScores = (playerScore, computerScore) =>
        `Player score ${playerScore}, Computer score: ${computerScore}`;
    
    switch(playerSelection.toLowerCase()) {
        case 'rock':
            if(computerSelection == 'Rock') {
                message.textContent = tie(computerSelection);
                scores.textContent = showScores(playerScore, computerScore);

                body.appendChild(message);
                body.appendChild(scores);
                break;
            }
            else if(computerSelection == 'Paper') {
                computerScore = computerScore + 1;
                message.textContent = playerLose(playerSelection, computerSelection);
                scores.textContent = showScores(playerScore, computerScore);

                body.appendChild(message);
                body.appendChild(scores);
                break;
            }
            else {
                playerScore = playerScore + 1;
                message.textContent = playerWin(playerSelection, computerSelection);
                scores.textContent = showScores(playerScore, computerScore);

                body.appendChild(message);
                body.appendChild(scores);
                break;
            }
        
        case 'paper':
            if(computerSelection == 'Rock') {
                playerScore = playerScore + 1;
                message.textContent = playerWin(playerSelection, computerSelection);
                scores.textContent = showScores(playerScore, computerScore);

                body.appendChild(message);
                body.appendChild(scores);
                break;
            }
            else if(computerSelection == 'Paper') {
                message.textContent = tie(computerSelection);
                scores.textContent = showScores(playerScore, computerScore);

                body.appendChild(message);
                body.appendChild(scores);
                break;
            }
            else {
                computerScore = computerScore + 1;
                message.textContent = playerLose(playerSelection, computerSelection);
                scores.textContent = showScores(playerScore, computerScore);

                body.appendChild(message);
                body.appendChild(scores);
                break;
            }
        
        case 'scissors':
            if(computerSelection == 'Rock') {
                computerScore = computerScore + 1;
                message.textContent = playerLose(playerSelection, computerSelection);
                scores.textContent = showScores(playerScore, computerScore);

                body.appendChild(message);
                body.appendChild(scores);
                break;
            }
            else if(computerSelection == 'Paper') {
                playerScore = playerScore + 1;
                message.textContent = playerWin(playerSelection, computerSelection);
                scores.textContent = showScores(playerScore, computerScore);

                body.appendChild(message);
                body.appendChild(scores);
                break;
            }
            else {
                message.textContent = tie(computerSelection);
                scores.textContent = showScores(playerScore, computerScore);

                body.appendChild(message);
                body.appendChild(scores);
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
