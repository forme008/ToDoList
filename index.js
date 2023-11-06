// let btn = document.querySelector("button")
// function darkModeFunc() {
//     if(btn.textContent == "dark"){
//         btn.textContent = "light"
//         document.body.style.backgroundcolor = "black"
//         document.body.style.color = "white"
//     }else if(btn.textContent == "light"){
//         btn.textContent = "dark"
//         document.body.style.backgroundcolor = "white"
//         document.body.style.color = "black"
//     }
// }

// let par = document.querySelector("p")
// par.innerHTML = "<h1>by world</h1>"
const elForm = document.querySelector(".form")
const elFormInput = document.querySelector(".form_input")
const elList = document.querySelector(".chat")

elForm.addEventListener("submit", e => {
    e.preventDefault()
    let inputValue = elFormInput.value.trim()


    if (inputValue != "") {
        elList.innerHTML = elList.innerHTML + `<h3> ${inputValue} </h3> <br>`

        elFormInput.value = null
    }

})