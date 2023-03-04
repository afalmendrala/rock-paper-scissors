function getComputerChoice() {
    const choices = Array('Rock', 'Paper', 'Scissors');
    return choices[Math.floor(Math.random() * choices.length)];
}