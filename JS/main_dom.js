const addName = document.querySelector("#addName");
const saveName = document.querySelector(".saveName");
const resetPage = document.querySelector(".reset");

const nameBox = document.querySelector(".nameBox");
const text = document.querySelector(".text")

function headName() {
    const nameText = document.createElement("p")
    nameBox.appendChild(nameText)
    nameText.innerHTML = `<p>Welcome ${addName.value}<p>`

}

resetPage.addEventListener('click', () => {
    location.reload()
})


saveName.addEventListener('click', () => {

    nameBox.removeChild(text)
    headName();
    
    console.log(addName.value)
    addName.value = ""

})
