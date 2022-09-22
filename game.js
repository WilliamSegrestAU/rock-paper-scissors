const choice = ['rock', 'paper', 'scissor'];


// Function will play as the CPU.
// Returns 'Rock', 'Paper', 'Scissor'
function getComputerChoice() {
    const rand = Math.random();
    let value = rand * choice.length;
    let index = Math.floor(value);

    console.log(choice[index]);
    return choice[index];
}

