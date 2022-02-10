let num1El = document.getElementById("num1")
let num2El = document.getElementById("num2")
let num3El = document.getElementById("num3")
let num4El = document.getElementById("num4")
let num5El = document.getElementById("num5")
let num6El = document.getElementById("num6")
let num7El = document.getElementById("num7")
let num8El = document.getElementById("num8")
let num9El = document.getElementById("num9")
let num10El = document.getElementById("num10")
let displayEl = document.getElementById("display")


function click(num) {
    displayEl.textContent += num
    console.log(displayEl.textContent)
}

num1El.addEventListener("click", function() {
    click(1)
})
num2El.addEventListener("click", function() {
    click(2)
})
num3El.addEventListener("click", function() {
    click(3)
})
num4El.addEventListener("click", function() {
    click(4)
})
num5El.addEventListener("click", function() {
    click(5)
})
num6El.addEventListener("click", function() {
    click(6)
})
num7El.addEventListener("click", function() {
    click(7)
})
num8El.addEventListener("click", function() {
    click(8)
})

num9El.addEventListener("click", function() {
    click(9)
})
num10El.addEventListener("click", function() {
    click(0)
})