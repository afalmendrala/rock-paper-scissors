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
    
    switch(playerSelection.toLowerCase()) {
        case 'rock':
            if(computerSelection == 'Rock') {
                return tie(computerSelection);
            }
            else if(computerSelection == 'Paper') {
                return playerLose(playerSelection, computerSelection);
            }
            else {
                return playerWin(playerSelection, computerSelection);
            }
        
        case 'paper':
            if(computerSelection == 'Rock') {
                return playerWin(playerSelection, computerSelection);
            }
            else if(computerSelection == 'Paper') {
                return tie(computerSelection);
            }
            else {
                return playerLose(playerSelection, computerSelection);
            }
        
        case 'scissors':
            if(computerSelection == 'Rock') {
                return playerLose(playerSelection, computerSelection);
            }
            else if(computerSelection == 'Paper') {
                return playerWin(playerSelection, computerSelection);
            }
            else {
                return tie(computerSelection);
            }            
    }
}

function game (){
    let playerSelection; 
    let computerSelection 
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt('Choice?');
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}