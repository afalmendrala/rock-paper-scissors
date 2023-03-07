function getComputerChoice() {
    const choices = Array('Rock', 'Paper', 'Scissors');
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    let playerScore = 0
    let computerScore = 0;
    
    let playerWin = (playerSelection, computerSelection) => 
        `You win! ${playerSelection} beats ${computerSelection}!`;
    
    let playerLose = (playerSelection, computerSelection) =>
        `You lose! ${computerSelection} beats ${playerSelection}!`;
    
    let tie = (computerSelection) =>
        `Tie! Both players chose ${computerSelection}!`;
    
    switch(playerSelection.toLowerCase()) {
        case 'rock':
            if(computerSelection == 'Rock') {
                return [
                    tie(computerSelection),
                    playerScore,
                    computerScore
                ];
            }
            else if(computerSelection == 'Paper') {
                return [
                    playerLose(playerSelection, computerSelection),
                    playerScore,
                    computerScore = computerScore + 1
                ];
            }
            else {
                return [
                    playerWin(playerSelection, computerSelection),
                    playerScore = playerScore + 1,
                    computerScore
                ];
            }
        
        case 'paper':
            if(computerSelection == 'Rock') {
                return [
                    playerWin(playerSelection, computerSelection),
                    playerScore = playerScore + 1,
                    computerScore
                ];
            }
            else if(computerSelection == 'Paper') {
                return [
                    tie(computerSelection),
                    playerScore,
                    computerScore
                ];
            }
            else {
                return [
                    playerLose(playerSelection, computerSelection),
                    playerScore,
                    computerScore = computerScore + 1
                ];
            }
        
        case 'scissors':
            if(computerSelection == 'Rock') {
                return [
                    playerLose(playerSelection, computerSelection),
                    playerScore,
                    computerScore = computerScore + 1
                ];
            }
            else if(computerSelection == 'Paper') {
                return [
                    playerWin(playerSelection, computerSelection),
                    playerScore = playerScore + 1,
                    computerScore
                ];
            }
            else {
                return [
                    tie(computerSelection),
                    playerScore,
                    computerScore
                ];
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

let roundResults;
let playerScore = 0
let computerScore = 0;
let buttonClickCount = 0;

let message = document.createElement('p');
let scores = document.createElement('p');
let winner = document.createElement('p');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttonClickCount = buttonClickCount + 1;

        roundResults = playRound(button.value, getComputerChoice());
        
        message.textContent = roundResults[0];
        body.appendChild(message);

        playerScore = playerScore + roundResults[1];
        computerScore = computerScore + roundResults[2];
        scores.textContent = `Player score: ${playerScore}, Computer score: ${computerScore}`;
        body.appendChild(scores);

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
