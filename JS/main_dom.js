const addName = document.querySelector("#addName");
const saveName = document.querySelector(".saveName");
const resetPage = document.querySelector(".reset");
const playBtn = document.querySelector(".btn-play")

const numberOfRounds = document.querySelector("#numberOfRounds")
const computerChoose = document.querySelector(".computerChoose")

const nameBox = document.querySelector(".nameBox");
const text = document.querySelector(".text");

let rounds = 5;
const choosedByComputer = ["rock", "scissors", "paper"];

function headName() {
    const nameText = document.createElement("p")
    nameBox.appendChild(nameText)
    nameText.innerHTML = `<p>Welcome ${addName.value} !<p>`

}

resetPage.addEventListener('click', () => {
    location.reload()
})

function computerChoosen () {
    const index = Math.floor(Math.random() * choosedByComputer.length);
    return choosedByComputer[index];
}

playBtn.addEventListener("click", () => {
    
    const play = computerChoosen()
    
    let playText = document.createElement("p")

    computerChoose.appendChild(playText)
    playText.innerText = play    
    
});

saveName.addEventListener('click', () => {

    rounds = numberOfRounds.value;
    console.log(rounds)

    nameBox.removeChild(text)
    headName();

    console.log(addName.value)
    addName.value = ""

})

