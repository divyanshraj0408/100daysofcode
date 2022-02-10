const contEl = document.getElementById("cont-el")

function click() {
    contEl.style.backgroundColor = "blue"
}
contEl.addEventListener("click", function() {
    click()
})