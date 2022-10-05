const choice = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let cpuScore = 0;
let container = document.getElementById('container')


// Plays as the CPU.
// Returns 'Rock', 'Paper', 'Scissors'
function getComputerChoice() {
    const rand = Math.random();
    let value = rand * choice.length;
    let index = Math.floor(value);

    return choice[index];
}

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

    keepScore(result);
    endGame();
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

// Serves purpose to keep track of score
function keepScore(val) {
    slice = val.slice(0,5);
    if (slice == "You W") {
        ++playerScore;
    }
    else if (slice == "You L") {
        ++cpuScore;
    }
    else {}

    if (container.childElementCount > 1) {
        container.removeChild(container.firstChild);
    }
    let resultDiv = document.createElement('div');
    resultDiv.textContent = `Player: ${playerScore} vs CPU: ${cpuScore} `;
    container.appendChild(resultDiv);
 }

 // Will end the game once a score reaches 5
 function endGame() {
    if (playerScore == 5) {;
        let winDiv = document.createElement('div');
        winDiv.textContent = 'You Win!';
        container.replaceChild(winDiv, container.firstChild);
    }
    else if (cpuScore == 5) {
        let winDiv = document.createElement('div');
        winDiv.textContent = 'You Lose!';
        container.replaceChild(winDiv, container.firstChild);
    }
    else {}
 }

// Looks for click event for corresponding button value
let buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        playRound(e.target.value);
    });
});

