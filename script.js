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

function game (){
    let playerSelection, computerSelection;
    let playerScore = 0; 
    let computerScore = 0;
    let result, message;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt('Choice?');
        computerSelection = getComputerChoice();

        result = playRound(playerSelection, computerSelection);
        message = result[0];

        playerScore = playerScore + result[1];
        computerScore = computerScore + result[2];

        console.log(`${message} Player score: ${playerScore}, Computer score: ${computerScore}`);

    }
}