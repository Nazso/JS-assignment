const addName = document.querySelector("#addName");
const saveName = document.querySelector(".saveName");

const nameBox = document.querySelector(".nameBox");
const text = document.querySelector(".text")


saveName.addEventListener('click', () => {

    nameBox.removeChild(text)


    const nameText = document.createElement("p")
    nameBox.appendChild(nameText)
    nameText.innerHTML = `<p>Welcome ${addName.value}<p>`

    console.log(addName.value)

})
