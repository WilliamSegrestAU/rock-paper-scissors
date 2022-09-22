const choice = ['Rock', 'Paper', 'Scissors'];


// Function will play as the CPU.
// Returns 'Rock', 'Paper', 'Scissor'
function getComputerChoice() {
    const rand = Math.random();
    let value = rand * choice.length;
    let index = Math.floor(value);

    console.log(choice[index]);
    return choice[index];
}

// Function will ask for user input
function getPlayerChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");
    choice = choice.Title();

    return choice;
}


