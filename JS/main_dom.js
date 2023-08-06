const addName = document.querySelector("#addName");
const saveName = document.querySelector(".saveName");

const nameBox = document.querySelector(".nameBox");
const text = document.querySelector(".text")

function headName() {
    const nameText = document.createElement("p")
    nameBox.appendChild(nameText)
    nameText.innerHTML = `<p>Welcome ${addName.value}<p>`

}


saveName.addEventListener('click', () => {

    nameBox.removeChild(text)

    headName();

    console.log(addName.value)

})
