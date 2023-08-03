const choosedByComputer = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    const numberOfChoosoing = Math.floor(Math.random() * choosedByComputer.length);

    return choosedByComputer[numberOfChoosoing];
}

console.log(computerPlay())