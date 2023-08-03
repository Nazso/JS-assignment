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

let playerSelection;
// const computerSelection = computerPlay();

// console.log(computerSelection)
// console.log(playGround(playerSelection, computerSelection))

function game () {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 1; i <= 5; i++) {
        let playerSelection = prompt(
            `Round ${i} choose Rock, Paper os Scissors: !`
        )

        if(playerSelection === null) {
            const confirmMessage = confirm(`Invalid input! Please write Rock, Paper os Scissors!`)

            if (confirmMessage) {
                console.log('This round has been deleted!')
            }
            else {
                i--
                continue
            }
        }

        if (
            playerSelection.toLowerCase() !== 'rock' &&
            playerSelection.toLowerCase() !== 'paper' &&
            playerSelection.toLowerCase() !== 'scissors'
        ) {
            alert(
                `Invalid answer! Your answer ${playerSelection} is not suitable!`
            )
                i--
            continue;
        }

        const computerSelection = computerPlay();
        const result = playGround(playerSelection, computerSelection);
        alert(result);
        console.log('The result is: ' + result);

        if(
            result.includes('win')
            // (playerSelection === "paper" && computerSelection === "rock") ||
            // (playerSelection === "rock" && computerSelection === "scissors") ||
            // (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            playerScore++
        }
        else if(
            result.includes('lost')
        ) {
            computerScore++
        }
    }
    // console.log(playerSelection)
    // console.log(computerSelection)
    console.log(playerScore)
    console.log(computerScore)

    if(playerScore > computerScore) {
        alert(`Congratulation! Your score is ${playerScore} You won the game!`)
    }
    else if (playerScore < computerScore) {
        alert(`Sorry, your score is ${playerScore} and the computer's score is ${computerScore}. You lost the game!`)
    }
    else {`It is a draw! Both of you have ${playerScore} score!`}
    
}

game();
