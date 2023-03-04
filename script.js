function getComputerChoice() {
    const choices = Array('Rock', 'Paper', 'Scissors');
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    switch(playerSelection.toLowerCase()) {
        case 'rock':
            if(computerSelection == 'Rock') {
                return `Tie! Both players chose ${computerSelection}!`;
            }
            else if(computerSelection == 'Paper') {
                return `You lose! ${computerSelection} beats ${playerSelection}!`;
            }
            else {
                return `You win! ${playerSelection} beats ${computerSelection}!`;
            }
            break;
        case 'paper':
            if(computerSelection == 'Rock') {
                return `You win! ${playerSelection} beats ${computerSelection}!`;
            }
            else if(computerSelection == 'Paper') {
                return `Tie! Both players chose ${computerSelection}!`;
            }
            else {
                return `You lose! ${computerSelection} beats ${playerSelection}!`;
            }
            break;
        case 'scissors':
            if(computerSelection == 'Rock') {
                return `You lose! ${computerSelection} beats ${playerSelection}!`;
            }
            else if(computerSelection == 'Paper') {
                return `You win! ${playerSelection} beats ${computerSelection}!`;
            }
            else {
                return `Tie! Both players chose ${computerSelection}!`;
            }
            break;
        default:
            return 'Invalid choice. Please only select from the three';          
    }
}