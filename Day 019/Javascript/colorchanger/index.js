const contEl = document.getElementById("cont-el")

function click() {
    contEl.style.backgroundColor = "blue"
}
contEl.addEventListener("click", function() {
    click()
})
contEl.addEventListener("dblclick", function() {
    contEl.style.backgroundColor = "aqua"
})