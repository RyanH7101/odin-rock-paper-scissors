//returns the computers choice
function getComputerChoice() {
    let computerOption = Math.floor(Math.random() * 3)
    switch (computerOption) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
    }
}

//player enters their choice
function playerChoice() {
    let playerOption = prompt("Rock, Paper or Scissors?").toUpperCase();
    return (playerOption)
}