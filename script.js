function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {  
    
    let playerWin = () => {
        playerScore+=1;
        message.textContent = `You win!`;
        showRoundResults(playerScore, computerScore);
    }
    
    let playerLose = () => {
        computerScore+=1;
        message.textContent = `You lose!`;
        showRoundResults(playerScore, computerScore);
    }
    
    let tie = () => {
        message.textContent = `Tie!`;
        showRoundResults(playerScore, computerScore);
    }
        
    let showRoundResults = (playerScore, computerScore) => {
        content.appendChild(message);
        displayScores(playerScore, computerScore);
    }

    switch(playerSelection.toLowerCase()) {
        case 'rock':
            if(computerSelection == 'Rock') {
                tie();
                break;
            }
            else if(computerSelection == 'Paper') {
                playerLose();
                break;
            }
            else {
                playerWin();
                break;
            }
        
        case 'paper':
            if(computerSelection == 'Rock') {
                playerWin();
                break;
            }
            else if(computerSelection == 'Paper') {
                tie();
                break;
            }
            else {
                playerLose();
                break;
            }
        
        case 'scissors':
            if(computerSelection == 'Rock') {
                playerLose();
                break;
            }
            else if(computerSelection == 'Paper') {
                playerWin();
                break;
            }
            else {
                tie();
                break;
            }            
    }
}

function displayScores(playerScore, computerScore) {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
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
    let computerInitial = document.createElement('p');
    computerInitial.setAttribute('id', 'computer-initial');
    computerInitial.textContent = '?';

    playerScore = 0;
    computerScore = 0;
    displayScores(playerScore, computerScore);
    
    content.removeChild(winner);
    content.removeChild(playAgain);
    document.getElementById('computer-choice').src = "";
    document.querySelector('.choice-container.computer').insertBefore(computerInitial, document.querySelector('.choice-container.computer')[0]);
    document.createElement
    content.appendChild(play);
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
const content = document.querySelector('.middle');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const choice = document.querySelector('.player-choice');
const play = document.querySelector('#play');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');

const choices = Array('Rock', 'Paper', 'Scissors');
choice.textContent = choices[0];
document.getElementById('player-choice').src = `./images/${choice.textContent}.png`;

let computerChoice;

const computerInitial = document.querySelector('#computer-initial');
computerInitial.textContent = "?";

let message = document.createElement('p');

let winner = document.createElement('p');
winner.classList.add('winner');

message.classList.add('results');

let playerScore = 0;
let computerScore = 0;

displayScores(playerScore, computerScore);

const playAgain = document.createElement('button');
playAgain.textContent = 'Play again?'
playAgain.setAttribute('id', 'play');

let buttonClickCount = 0;

prev.addEventListener('click', () => selection(prev.textContent));
next.addEventListener('click', () => selection(next.textContent));
play.addEventListener('click', () => {
    computerChoice = getComputerChoice();
    playRound(choice.textContent, computerChoice);

    if(buttonClickCount == 0) {
        document.getElementById('computer-initial').remove();
        document.getElementById('computer-choice').src = `./images/${computerChoice}.png`;
    }
    else {
        document.getElementById('computer-choice').src = `./images/${computerChoice}.png`;
    }

    buttonClickCount+=1;

    if(buttonClickCount == 5) {
        buttonClickCount = 0;
        document.getElementById('play').remove();
        document.querySelector('.results').remove();
        showGameWinner(playerScore, computerScore);
        content.appendChild(playAgain);
    }

});
playAgain.addEventListener('click', () => playAgainEvent());