let text = document.querySelector("#text")
console.log(text)

const buttonEl = document.querySelector(".button")
console.log(buttonEl)


function click() {
    let textEl = text.textContent
    textEl = "lorem"
    text.textContent = textEl
}