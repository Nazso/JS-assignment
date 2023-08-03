const choosedByComputer = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    const numberOfChoosoing = Math.floor(Math.random() * choosedByComputer.length);

    return choosedByComputer[numberOfChoosoing];
}

// console.log(computerPlay())

function playGround (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {

        return `You win, ${playerSelection} beats ${computerSelection}!`

    }

    else if (
        (playerSelection === computerSelection)
    ) {
        return `You both chose ${playerSelection}`
    }

    else {
        return `You lost the game, because ${computerSelection} beats ${playerSelection}`
    }
}

const playerSelection = "Paper";
const computerSelection = computerPlay();

console.log(computerSelection)
console.log(playGround(playerSelection, computerSelection))

