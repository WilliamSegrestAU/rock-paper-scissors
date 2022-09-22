const choice = ['Rock', 'Paper', 'Scissors'];


// Plays as the CPU.
// Returns 'Rock', 'Paper', 'Scissors'
function getComputerChoice() {
    const rand = Math.random();
    let value = rand * choice.length;
    let index = Math.floor(value);

    return choice[index];
}

// Asks for user input
function getPlayerChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");

    return choice;
}

// Serves as a round played of 'Rock', 'Paper', 'Scissors'
function playRound() {
    let Player = getPlayerChoice();
    let CPU = getComputerChoice();

    let result = determineWinner(Player, CPU);
    console.log(result);
}

// Based on user input and CPU choice, function will determine round winner
function determineWinner(player, cpu) {
    switch (player.toUpperCase()) {
        // Player chose Rock
        case 'ROCK':
            if (cpu == 'Paper') {
                return "You Lose! Paper beats Rock";
            }
            else if (cpu == 'Scissors') {
                return "You Win! Rock beats Scissors";
            }
            else {
                return "You Tied! You both chose Rock";
            }
        
        // Player chose Paper
        case 'PAPER':
            if (cpu == 'Rock') {
                return "You Win! Paper beats Rock";
            }
            else if (cpu == 'Scissors') {
                return "You Lose! Scissors beat Paper";
            }
            else {
                return "You Tied! You both chose Paper";
            }

        // Player choose Scissors
        case 'SCISSORS':
            if (cpu == 'Rock') {
                return "You Lose! Rock beats Scissors";
            }
            else if (cpu == 'Paper') {
                return "You Win! Scissors beat Paper";
            }
            else {
                return "You Tied! You both chose Scissors";
            }

        // User input is not "Rock", "Paper", or "Scissors"
       default:
           return "You didn't choose Rock, Paper, or Scissors!" 
    }
}

