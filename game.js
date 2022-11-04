const choice = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let cpuScore = 0;
let container = document.getElementById('container')
let gameContainer = document.querySelector('.game_container');


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
        resetTitle();
        disableButtons();
        playAgain();
    }
    else if (cpuScore == 5) {
        let winDiv = document.createElement('div');
        winDiv.textContent = 'You Lose!';
        container.replaceChild(winDiv, container.firstChild);
        resetTitle();
        disableButtons();
        playAgain();
    }
    else {}
 }

 // After game finishes, retry button will repear to refresh page
 function disableButtons() {
    buttons.forEach((btn) => {
        btn.disabled = true;
    }); // Disable all the buttons
 }

 function resetTitle() {
    titles.forEach((title) => {
        title.style.color = 'rgba(255, 255, 255, 0.389)';
        title.style.fontSize = '7rem';
    });
 }

 // After game finishes, a play again button will apear
 // This button refreshes the page
 function playAgain() {
     let playAgainBtn = document.createElement('button');
     playAgainBtn.textContent = 'Play Again?';

     gameContainer.appendChild(playAgainBtn);

    playAgainBtn.addEventListener('mouseover', () => {
        playAgainBtn.style.color = 'white';
        playAgainBtn.style.fontSize = '5rem';
    });
    playAgainBtn.addEventListener('mouseleave', () => {
        playAgainBtn.style.color = 'rgba(255, 255, 255, 0.389)';
        playAgainBtn.style.fontSize = '4rem';
    });

    playAgainBtn.addEventListener('click', () => {
        location.reload();  // Upon click, this refreshes the current document
    });
 }

 let titles = document.querySelectorAll('#title');
 let rock = document.querySelector('.rock_title');
 let paper = document.querySelector('.paper_title');
 let scissors = document.querySelector('.scissors_title');

let buttons = document.querySelectorAll('.opt_btn');
buttons.forEach((btn) => {
    // Looks for click event for corresponding button value
    btn.addEventListener('click', (e) => {
        playRound(e.target.value);
    });
    // Looks for mouse over event for corresponding button value
    btn.addEventListener('mouseover', (e) => {
        if (e.target.value == 'rock') {
            rock.style.color = 'white';
            rock.style.fontSize = '8rem';
        }
        else if (e.target.value == 'paper') {
            paper.style.color = 'white';
            paper.style.fontSize = '8rem';
        }
        else {
            scissors.style.color = 'white';
            scissors.style.fontSize = '8rem';
        }
    });
    // Looks for mouse out event; resets title
    btn.addEventListener('mouseout', resetTitle);
});

