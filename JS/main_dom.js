const addName = document.querySelector("#addName");
const saveName = document.querySelector(".saveName");
const resetPage = document.querySelector(".reset");

const numberOfRounds = document.querySelector("#numberOfRounds")

const nameBox = document.querySelector(".nameBox");
const text = document.querySelector(".text");

let rounds = 5;

function headName() {
    const nameText = document.createElement("p")
    nameBox.appendChild(nameText)
    nameText.innerHTML = `<p>Welcome ${addName.value} !<p>`

}

resetPage.addEventListener('click', () => {
    location.reload()
})


saveName.addEventListener('click', () => {

    rounds = numberOfRounds.value;
    console.log(rounds)

    nameBox.removeChild(text)
    headName();

    console.log(addName.value)
    addName.value = ""

})

