const choice = ['Rock', 'Paper', 'Scissors'];
let container = document.getElementById('container')


// Plays as the CPU.
// Returns 'Rock', 'Paper', 'Scissors'
function getComputerChoice() {
    const rand = Math.random();
    let value = rand * choice.length;
    let index = Math.floor(value);

    return choice[index];
}

// Asks for user input
// function getPlayerChoice() {
//     let choice = prompt("Rock, Paper, or Scissors?");

//     return choice;
// }

// Serves as a round played of 'Rock', 'Paper', 'Scissors'
function playRound(value) {
    // let Player = getPlayerChoice();
    let Player = value;
    let CPU = getComputerChoice();

    let result = determineWinner(Player, CPU);

    if (container.childElementCount) {
        container.removeChild(container.firstChild);
    }

    let div = document.createElement('div');
    div.textContent = result;
    container.appendChild(div);
    return result;
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
           return "You didn't choose Rock, Paper, or Scissors!";
    }
}

// Runs a game (5 rounds)
// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     let roundResult, slice;

//     for (let i = 0; i < 5; i++) {
//         roundResult = playRound();
//         slice = roundResult.slice(0,5);
//         if (slice == "You W") {
//             ++playerScore;
//         }
//         else if (slice == "You L") {
//             ++computerScore;
//         }
//         else {}
//     }

//     console.log(`Final Score: Player (${playerScore}) vs CPU (${computerScore})`);
// }

// Looks for click event for corresponding button value
let buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        playRound(e.target.value);
    });
});

